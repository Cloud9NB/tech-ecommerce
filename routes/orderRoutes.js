const { createOrder } = require('../controllers/orders');
const router = require('express').Router();

router.post('/', createOrder);

module.exports = router;
