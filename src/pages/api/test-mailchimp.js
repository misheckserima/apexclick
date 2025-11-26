import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX
});

export default async function handler(req, res) {
  try {
    const response = await mailchimp.ping.get();
    return res.status(200).json({
      success: true,
      message: 'Successfully connected to Mailchimp',
      data: response
    });
  } catch (error) {
    console.error('Mailchimp connection error:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to connect to Mailchimp',
      message: error.message,
      details: error.response?.body || 'No additional details'
    });
  }
}
