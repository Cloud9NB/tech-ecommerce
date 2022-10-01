const router = require('express').Router();
const {
  signup,
  login,
  getOrders,
  getUsersOrder,
  updateNotifications,
} = require('../controllers/users');

router.get('/', getOrders);
router.post('/signup', signup);
router.post('/login', login);
router.get('/:id/orders', getUsersOrder);
router.post('/:id/updateNotifications', updateNotifications);
module.exports = router;
