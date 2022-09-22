const router = require('express').Router();
const { createPayment } = require('../controllers/payment');

router.post('/create-payment', createPayment);

module.exports = router;
