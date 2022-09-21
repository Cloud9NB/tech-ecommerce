const {
  addToCart,
  increaseCart,
  decreaseCart,
  removeFromCart,
} = require('../controllers/cart');

const router = require('express').Router();

router.patch('/add-to-cart', addToCart);
router.patch('/remove-from-cart', removeFromCart);
router.patch('/increase-cart', increaseCart);
router.patch('/decrease-cart', decreaseCart);

module.exports = router;
