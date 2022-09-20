const User = require('../models/Users');

module.exports = {
  addToCart: async (req, res) => {
    const { userId, productId, price, quantity } = req.body;

    try {
      const user = await User.findById(userId);
      const userCart = user.cart;

      if (user.cart[productId]) {
        userCart[productId] += quantity;
      } else {
        userCart[productId] = quantity;
      }

      userCart.count += quantity;
      userCart.total += price;
      userCart.total = Number(userCart.total.toFixed(2));
      user.cart = userCart;

      user.markModified('cart');
      await user.save();
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json(error.message);
    }
  },

  increaseCart: async (req, res) => {
    const { userId, productId, price } = req.body;

    try {
      const user = await User.findById(userId);
      const userCart = user.cart;

      userCart.total += price;
      userCart.total = Number(userCart.total.toFixed(2));
      userCart.count += 1;
      userCart[productId] += 1;
      user.cart = userCart;

      user.markModified('cart');
      await user.save();
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json(error.message);
    }
  },

  decreaseCart: async (req, res) => {
    const { userId, productId, price } = req.body;

    try {
      const user = await User.findById(userId);
      const userCart = user.cart;

      userCart.total -= price;
      userCart.total = Number(userCart.total.toFixed(2));
      userCart.count -= 1;
      userCart[productId] -= 1;
      user.cart = userCart;

      user.markModified('cart');
      await user.save();
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json(error.message);
    }
  },

  removeFromCart: async (req, res) => {
    const { userId, productId, price } = req.body;

    try {
      const user = await User.findById(userId);
      const userCart = user.cart;

      userCart.total -= userCart[productId] * price;
      userCart.total = Number(userCart.total.toFixed(2));
      userCart.count -= userCart[productId];
      delete userCart[productId];
      user.cart = userCart;

      user.markModified('cart');
      await user.save();
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json(error.message);
    }
  },
};
