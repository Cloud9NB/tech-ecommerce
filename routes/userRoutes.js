const router = require('express').Router();
const { signup, login, getOrders } = require('../controllers/users');

router.get('/', getOrders);
router.post('/signup', signup);
router.post('/login', login);

module.exports = router;
