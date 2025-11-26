import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ 
      error: 'Method not allowed',
      message: 'Only POST requests are allowed'
    });
  }

  const { email } = req.body;

  // Basic email validation
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ 
      error: 'Invalid email',
      message: 'Please provide a valid email address'
    });
  }

  let client;

  try {
    client = new MongoClient(uri);
    await client.connect();
    
    const db = client.db('apexclick');
    const subscribers = db.collection('subscribers');

    // Check if email already exists
    const existingSubscriber = await subscribers.findOne({ email: email.toLowerCase() });
    
    if (existingSubscriber) {
      return res.status(400).json({
        error: 'Already subscribed',
        message: 'This email is already subscribed to our newsletter'
      });
    }

    // Insert new subscriber
    const result = await subscribers.insertOne({
      email: email.toLowerCase(),
      subscribedAt: new Date(),
      source: 'website',
      status: 'active'
    });

    return res.status(200).json({ 
      success: true,
      message: 'Thank you for subscribing!',
      data: {
        id: result.insertedId,
        email: email.toLowerCase()
      }
    });

  } catch (error) {
    console.error('MongoDB Error:', error.message);
    
    return res.status(500).json({
      error: 'Subscription failed',
      message: 'Failed to process subscription. Please try again.'
    });
  } finally {
    if (client) {
      await client.close();
    }
  }
}
