import React from 'react';
import AntiBot from '../components/AntiBot';
import { setWebhook, getWebhookInfo } from '../utils/telegram';

const MainPage = () => {
  const botToken = 'YOUR_BOT_TOKEN'; // Replace with your actual bot token

  const handleSetWebhook = async () => {
    const result = await setWebhook(botToken);
    console.log('Set Webhook Result:', result);
  };

  const handleGetWebhookInfo = async () => {
    const result = await getWebhookInfo(botToken);
    console.log('Webhook Info:', result);
  };

  return (
    <div>
      <AntiBot />
      <button onClick={handleSetWebhook}>Set Webhook</button>
      <button onClick={handleGetWebhookInfo}>Get Webhook Info</button>
    </div>
  );
};

export default MainPage;