const { createOrder, getAllOrders } = require('../controllers/orders');
const router = require('express').Router();

router.post('/', createOrder);
router.get('/', getAllOrders);
module.exports = router;
