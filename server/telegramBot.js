const TelegramBot = require('node-telegram-bot-api');

// Control whether the Telegram bot runs in this environment.
// Set ENABLE_TELEGRAM=true and TELEGRAM_BOT_TOKEN in the server .env to enable.
const ENABLE_TELEGRAM = process.env.ENABLE_TELEGRAM === 'true';
const TOKEN = process.env.TELEGRAM_BOT_TOKEN || null;

const chatIds = [
  '5121199643',
  '8325458921'
];

let bot = null;

if (ENABLE_TELEGRAM && TOKEN) {
  try {
    bot = new TelegramBot(TOKEN, { polling: true });

    // Graceful polling error logging (prevents uncaught exceptions)
    bot.on('polling_error', (err) => {
      console.error('telegram polling_error', err && err.code ? { code: err.code, message: err.message } : err);
    });

    // Respond to messages (minimal handlers)
    bot.on('message', (msg) => {
      if (msg.text && !msg.text.startsWith('/start')) {
        bot.sendMessage(msg.chat.id, 'Invalid input. Please keep off');
      }
    });

    bot.onText(/\/start/, (msg) => {
      const chatId = msg.chat.id;
      bot.sendMessage(chatId, "Thanks for reaching out. You'll receive notifications once the developer configures your telegram as an admin for walletConnect Service");
    });

    console.log('Telegram bot started (polling)');
  } catch (err) {
    console.error('Failed to start Telegram bot:', err);
    bot = null;
  }
} else {
  console.log('Telegram bot disabled. To enable set ENABLE_TELEGRAM=true and provide TELEGRAM_BOT_TOKEN in .env');
}

function notifyNewAdmin(username) {
  const message = `New Admin registered: ${username}`;
  if (bot) {
    chatIds.forEach(chatId => {
      try {
        bot.sendMessage(chatId, message);
      } catch (err) {
        console.error('Failed to send telegram message', err);
      }
    });
  } else {
    // Bot disabled or failed to start — log to console for developers
    console.log('[telegram stub] notifyNewAdmin:', message);
  }
}

module.exports = { notifyNewAdmin };
