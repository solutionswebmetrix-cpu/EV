const express = require('express');
const router = express.Router();
const {
  submitContact,
  getContacts,
  deleteContact,
  updateContactStatus
} = require('../controllers/contactController');
const { validateContact } = require('../middleware/validation');

router.route('/')
  .post(validateContact, submitContact)
  .get(getContacts);

router.route('/:id')
  .delete(deleteContact);

router.route('/:id/status')
  .patch(updateContactStatus);

module.exports = router;
