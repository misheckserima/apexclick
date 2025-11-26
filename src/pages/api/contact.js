import { MongoClient } from 'mongodb';

// Load environment variables
require('dotenv').config({ path: '.env.local' });

const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = 'apexclick';

// Create database indexes if they don't exist
async function ensureIndexes(db) {
  try {
    await db.collection('contacts').createIndex({ email: 1 }, { unique: true });
    await db.collection('contacts').createIndex({ createdAt: 1 }, { expireAfterSeconds: 31536000 }); // 1 year TTL
    console.log('Database indexes created successfully');
  } catch (error) {
    console.error('Error creating indexes:', error);
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false,
      error: 'Method not allowed',
      message: 'Only POST requests are allowed'
    });
  }

  const { name, email, phone, subject, message } = req.body;

  // Basic validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      error: 'Missing required fields',
      message: 'Please fill in all required fields',
      missingFields: [
        !name ? 'name' : null,
        !email ? 'email' : null,
        !subject ? 'subject' : null,
        !message ? 'message' : null
      ].filter(Boolean)
    });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({
      success: false,
      error: 'Invalid email format',
      message: 'Please provide a valid email address'
    });
  }

  let client;
  let session;

  try {
    // Connect to MongoDB with retryWrites and other recommended options
    client = await MongoClient.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });
    
    const db = client.db(DB_NAME);
    session = client.startSession();
    
    // Start a transaction for data consistency
    session.startTransaction();
    
    // Insert the contact form submission
    const result = await db.collection('contacts').insertOne({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      phone: phone ? phone.trim() : null,
      subject: subject.trim(),
      message: message.trim(),
      ipAddress: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
      userAgent: req.headers['user-agent'],
      createdAt: new Date(),
      updatedAt: new Date(),
      status: 'new',
      source: 'website',
      metadata: {
        // Additional metadata that might be useful
        referer: req.headers.referer || 'direct',
        contentType: req.headers['content-type']
      }
    }, { session });

    // Ensure indexes exist
    await ensureIndexes(db);
    
    // Commit the transaction
    await session.commitTransaction();
    
    return res.status(201).json({
      success: true,
      success: true,
      message: 'Thank you for your message! We will get back to you soon.',
      data: {
        id: result.insertedId
      }
    });

  } catch (error) {
    console.error('Database error:', error);
    return res.status(500).json({
      error: 'Database error',
      message: 'Failed to save your message. Please try again later.'
    });
  } finally {
    if (client) {
      await client.close();
    }
  }
}
