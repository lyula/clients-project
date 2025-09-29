const TelegramBot = require('node-telegram-bot-api');
const token = '8079837235:AAHHkIWExwpjhFVoV88DE4j0832Px4RH6DY';
const bot = new TelegramBot(token, { polling: true });

const chatIds = [
  '5121199643'
];
// Respond to any other message
bot.on('message', (msg) => {
  if (msg.text && !msg.text.startsWith('/start')) {
    bot.sendMessage(msg.chat.id, 'Invalid input. Please keep off');
  }
});

// Handle /start command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Thanks for reaching out. You'll receive notifications once the developer configures your telegram as an admin for walletConnect Service");
});




function notifyNewAdmin(username) {
  const message = `New Admin registered: ${username}`;
  chatIds.forEach(chatId => {
    bot.sendMessage(chatId, message);
  });
}

module.exports = { notifyNewAdmin };
