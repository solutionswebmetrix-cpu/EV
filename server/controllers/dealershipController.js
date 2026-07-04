const Dealership = require('../models/Dealership');
const sendEmail = require('../config/mailer');
const { getDealershipOwnerEmail, getDealershipCustomerEmail } = require('../utils/emailTemplates');

// @desc    Submit dealership application
// @route   POST /api/dealership
// @access  Public
const submitDealership = async (req, res) => {
  try {
    const {
      full_name,
      company_name,
      email,
      phone,
      state,
      city,
      address,
      investment,
      business_experience,
      message
    } = req.body;

    const dealership = await Dealership.create({
      fullName: full_name,
      companyName: company_name,
      email,
      phone,
      state,
      city,
      address,
      investmentCapacity: investment,
      businessExperience: business_experience,
      message
    });

    // Send email to owner
    const ownerEmail = getDealershipOwnerEmail({
      fullName: full_name,
      companyName: company_name,
      email,
      phone,
      state,
      city,
      address,
      investmentCapacity: investment,
      businessExperience: business_experience,
      message
    });

    await sendEmail(
      process.env.OWNER_EMAIL,
      'New Dealership Inquiry',
      ownerEmail.text,
      ownerEmail.html
    );

    // Send confirmation email to customer
    const customerEmail = getDealershipCustomerEmail();
    await sendEmail(
      email,
      'Thank You for Applying',
      customerEmail.text,
      customerEmail.html
    );

    res.status(201).json({
      success: true,
      message: 'Dealership application submitted successfully.',
      data: dealership
    });
  } catch (error) {
    console.error('Error submitting dealership application:', error);
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.'
    });
  }
};

// @desc    Get all dealership applications
// @route   GET /api/dealership
// @access  Public (Admin)
const getDealerships = async (req, res) => {
  try {
    const dealerships = await Dealership.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      data: dealerships
    });
  } catch (error) {
    console.error('Error fetching dealership applications:', error);
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.'
    });
  }
};

// @desc    Delete dealership application
// @route   DELETE /api/dealership/:id
// @access  Public (Admin)
const deleteDealership = async (req, res) => {
  try {
    const dealership = await Dealership.findByIdAndDelete(req.params.id);
    if (!dealership) {
      return res.status(404).json({
        success: false,
        message: 'Dealership application not found.'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Dealership application deleted successfully.'
    });
  } catch (error) {
    console.error('Error deleting dealership application:', error);
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.'
    });
  }
};

// @desc    Update dealership status
// @route   PATCH /api/dealership/:id/status
// @access  Public (Admin)
const updateDealershipStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const dealership = await Dealership.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );
    if (!dealership) {
      return res.status(404).json({
        success: false,
        message: 'Dealership application not found.'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Status updated successfully.',
      data: dealership
    });
  } catch (error) {
    console.error('Error updating dealership status:', error);
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.'
    });
  }
};

module.exports = {
  submitDealership,
  getDealerships,
  deleteDealership,
  updateDealershipStatus
};
