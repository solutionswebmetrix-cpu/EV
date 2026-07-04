require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const xss = require('xss-clean');
const connectDB = require('./config/db');
const dealershipRoutes = require('./routes/dealershipRoutes');
const contactRoutes = require('./routes/contactRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

// Connect to database
connectDB();

const app = express();

// Security middleware
app.use(helmet());
app.use(cors());
app.use(xss());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Parse JSON
app.use(express.json({ limit: '10kb'));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// Routes
app.use('/api/dealership', dealershipRoutes);
app.use('/api/contact', contactRoutes);

// Error handling
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} in ${process.env.NODE_ENV} mode`);
});
