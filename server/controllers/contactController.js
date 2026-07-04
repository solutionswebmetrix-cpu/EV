const Contact = require('../models/Contact');
const sendEmail = require('../config/mailer');
const { getContactOwnerEmail, getContactCustomerEmail } = require('../utils/emailTemplates');

// @desc    Submit contact form
// @route   POST /api/contact
// @access  Public
const submitContact = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      subject,
      message
    } = req.body;

    const contact = await Contact.create({
      fullName,
      email,
      phone,
      subject,
      message
    });

    // Send email to owner
    const ownerEmail = getContactOwnerEmail({
      fullName,
      email,
      phone,
      subject,
      message
    });

    await sendEmail(
      process.env.OWNER_EMAIL,
      'New Contact Inquiry',
      ownerEmail.text,
      ownerEmail.html
    );

    // Send confirmation email to customer
    const customerEmail = getContactCustomerEmail();
    await sendEmail(
      email,
      'Thank You for Contacting AeroVolt',
      customerEmail.text,
      customerEmail.html
    );

    res.status(201).json({
      success: true,
      message: 'Your message has been sent successfully.',
      data: contact
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.'
    });
  }
};

// @desc    Get all contact inquiries
// @route   GET /api/contact
// @access  Public (Admin)
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      data: contacts
    });
  } catch (error) {
    console.error('Error fetching contact inquiries:', error);
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.'
    });
  }
};

// @desc    Delete contact inquiry
// @route   DELETE /api/contact/:id
// @access  Public (Admin)
const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact inquiry not found.'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Contact inquiry deleted successfully.'
    });
  } catch (error) {
    console.error('Error deleting contact inquiry:', error);
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.'
    });
  }
};

// @desc    Update contact status
// @route   PATCH /api/contact/:id/status
// @access  Public (Admin)
const updateContactStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact inquiry not found.'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Status updated successfully.',
      data: contact
    });
  } catch (error) {
    console.error('Error updating contact status:', error);
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.'
    });
  }
};

module.exports = {
  submitContact,
  getContacts,
  deleteContact,
  updateContactStatus
};
