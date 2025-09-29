const express = require('express');
const dotenv = require('dotenv');
// Load env vars early so any required modules (controllers/routes) see them
dotenv.config();
const helmet = require('helmet');
const cors = require('cors');
const logger = require('./src/utils/logger');
const connectDB = require('./src/config/db');
// Start Telegram bot (after env loaded)
require('./telegramBot');
const adminRoutes = require('./src/routes/adminRoutes');

// Connect to DB
connectDB();

const app = express();

// Middleware
app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));
app.use(express.json());
app.use(logger);

// Routes
app.use('/api/admins', adminRoutes);

app.get('/', (req, res) => {
  res.send('Wallet Connect Backend Running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
