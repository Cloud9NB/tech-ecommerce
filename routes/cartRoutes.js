const {
  addToCart,
  increaseCart,
  decreaseCart,
  removeFromCart,
} = require('../controllers/cart');

const router = require('express').Router();

router.post('/add-to-cart', addToCart);
router.post('/remove-from-cart', removeFromCart);
router.post('/increase-cart', increaseCart);
router.post('/decrease-cart', decreaseCart);

module.exports = router;
