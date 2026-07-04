const { body, validationResult } = require('express-validator');

const validateDealership = [
  body('full_name').trim().notEmpty().withMessage('Full name is required').isLength({ max: 100 }).withMessage('Full name must be less than 100 characters'),
  body('company_name').trim().notEmpty().withMessage('Company name is required').isLength({ max: 100 }).withMessage('Company name must be less than 100 characters'),
  body('email').trim().isEmail().withMessage('Please enter a valid email address').normalizeEmail(),
  body('phone').trim().notEmpty().withMessage('Phone number is required').isLength({ min: 10, max: 15 }).withMessage('Phone number must be between 10-15 characters'),
  body('state').optional().trim().isLength({ max: 50 }).withMessage('State must be less than 50 characters'),
  body('city').trim().notEmpty().withMessage('City is required').isLength({ max: 50 }).withMessage('City must be less than 50 characters'),
  body('address').optional().trim().isLength({ max: 500 }).withMessage('Address must be less than 500 characters'),
  body('investment').trim().notEmpty().withMessage('Investment capacity is required').isLength({ max: 100 }).withMessage('Investment capacity must be less than 100 characters'),
  body('business_experience').optional().trim().isLength({ max: 100 }).withMessage('Business experience must be less than 100 characters'),
  body('message').trim().notEmpty().withMessage('Message is required').isLength({ max: 1000 }).withMessage('Message must be less than 1000 characters'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }
    next();
  }
];

const validateContact = [
  body('fullName').trim().notEmpty().withMessage('Full name is required').isLength({ max: 100 }).withMessage('Full name must be less than 100 characters'),
  body('email').trim().isEmail().withMessage('Please enter a valid email address').normalizeEmail(),
  body('phone').trim().notEmpty().withMessage('Phone number is required').isLength({ min: 10, max: 15 }).withMessage('Phone number must be between 10-15 characters'),
  body('subject').trim().notEmpty().withMessage('Subject is required').isLength({ max: 200 }).withMessage('Subject must be less than 200 characters'),
  body('message').trim().notEmpty().withMessage('Message is required').isLength({ max: 1000 }).withMessage('Message must be less than 1000 characters'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }
    next();
  }
];

module.exports = {
  validateDealership,
  validateContact
};
