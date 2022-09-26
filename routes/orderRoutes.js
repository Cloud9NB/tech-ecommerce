const {
  createOrder,
  getAllOrders,
  updateStatus,
} = require('../controllers/orders');
const router = require('express').Router();

router.post('/', createOrder);
router.get('/', getAllOrders);
router.patch('/:id/mark-shipped', updateStatus);
module.exports = router;
