const Order = require('../models/Orders');
const User = require('../models/Users');

module.exports = {
  createOrder: async (req, res) => {
    const { userId, cart, address, city, postalCode, country, phoneNumber } =
      req.body;

    try {
      const user = await User.findById(userId);
      const order = await Order.create({
        owner: user._id,
        products: cart,
        count: cart.count,
        total: cart.total,
        address,
        city,
        postalCode,
        country,
        phoneNumber,
      });

      await order.save();

      user.cart = { total: 0, count: 0 };
      user.orders.push(order);
      user.markModified('orders');
      await user.save();

      res.status(200).json(user);
    } catch (error) {
      res.status(400).json(error.message);
    }
  },
};
