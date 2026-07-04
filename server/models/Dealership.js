const mongoose = require('mongoose');

const dealershipSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  companyName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  state: {
    type: String,
    trim: true
  },
  city: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    type: String,
    trim: true
  },
  investmentCapacity: {
    type: String,
    required: true,
    trim: true
  },
  businessExperience: {
    type: String,
    trim: true
  },
  message: {
    type: String,
    required: true,
    trim: true
  },
  status: {
    type: String,
    enum: ['Pending', 'Contacted', 'Approved', 'Rejected'],
    default: 'Pending'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Dealership', dealershipSchema);
