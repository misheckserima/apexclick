import mailchimp from '@mailchimp/mailchimp_marketing';

// Configure Mailchimp
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX
});

export default async function handler(req, res) {
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

  try {
    const response = await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_AUDIENCE_ID,
      {
        email_address: email,
        status: 'subscribed',
        tags: ['Website Signup']
      }
    );

    return res.status(200).json({ 
      success: true,
      data: {
        id: response.id,
        email: response.email_address,
        status: response.status
      }
    });

  } catch (error) {
    console.error('Mailchimp API Error:', error.response?.body || error.message);
    
    if (error.response?.body?.title === 'Member Exists') {
      return res.status(400).json({
        error: 'Already subscribed',
        message: 'This email is already subscribed to our newsletter'
      });
    }

    return res.status(500).json({
      error: 'Subscription failed',
      message: error.response?.body?.detail || 'Failed to process subscription'
    });
  }
}
