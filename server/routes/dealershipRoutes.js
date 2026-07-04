const express = require('express');
const router = express.Router();
const {
  submitDealership,
  getDealerships,
  deleteDealership,
  updateDealershipStatus
} = require('../controllers/dealershipController');
const { validateDealership } = require('../middleware/validation');

router.route('/')
  .post(validateDealership, submitDealership)
  .get(getDealerships);

router.route('/:id')
  .delete(deleteDealership);

router.route('/:id/status')
  .patch(updateDealershipStatus);

module.exports = router;
