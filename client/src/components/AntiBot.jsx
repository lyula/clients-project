import React from 'react';

const AntiBot = () => {
  const isBot = () => {
    // Example anti-bot logic
    const userAgent = navigator.userAgent;
    const botKeywords = [
      'bot', 'crawl', 'spider', 'slurp', 'mediapartners'
    ];

    return botKeywords.some(keyword => userAgent.toLowerCase().includes(keyword));
  };

  React.useEffect(() => {
    if (isBot()) {
      console.log('Bot detected');
      // Handle bot detection (e.g., redirect or block)
    }
  }, []);

  return (
    <div>
      <h1>Welcome to Wallet Connect</h1>
    </div>
  );
};

export default AntiBot;