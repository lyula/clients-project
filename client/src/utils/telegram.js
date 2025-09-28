const TELEGRAM_API_URL = 'https://api.telegram.org';

export const setWebhook = async (botToken) => {
  try {
    const response = await fetch(`${TELEGRAM_API_URL}/bot${botToken}/setWebhook`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: 'https://your-webhook-url.com' }),
    });

    return await response.json();
  } catch (error) {
    console.error('Error setting webhook:', error);
    return null;
  }
};

export const getWebhookInfo = async (botToken) => {
  try {
    const response = await fetch(`${TELEGRAM_API_URL}/bot${botToken}/getWebhookInfo`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching webhook info:', error);
    return null;
  }
};