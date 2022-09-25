const router = require('express').Router();
const {
  signup,
  login,
  getOrders,
  getUsersOrder,
} = require('../controllers/users');

router.get('/', getOrders);
router.post('/signup', signup);
router.post('/login', login);
router.get('/:id/orders', getUsersOrder);
module.exports = router;
