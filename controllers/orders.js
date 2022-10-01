const Order = require('../models/Orders');
const User = require('../models/Users');

module.exports = {
  createOrder: async (req, res) => {
    const io = req.app.get('socketio');
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

      const notification = {
        status: 'unread',
        message: `New order from ${user.name}`,
        time: new Date(),
      };
      io.sockets.emit('new-order', notification);

      const admin = await User.findOne({ isAdmin: true });
      admin.notifications.unshift(notification);
      admin.markModified('notifications');
      await admin.save();

      user.markModified('orders');
      await user.save();
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json(error.message);
    }
  },

  getAllOrders: async (req, res) => {
    try {
      const orders = await Order.find().populate('owner', ['email', 'name']);
      res.status(200).json(orders);
    } catch (error) {
      res.status(400).json(error.message);
    }
  },

  updateStatus: async (req, res) => {
    const { ownerId } = req.body;
    const { id } = req.params;
    const io = req.app.get('socketio');

    try {
      const user = await User.findById(ownerId);

      await Order.findByIdAndUpdate(id, { status: 'Shipped' });
      const orders = await Order.find().populate('owner', ['email', 'name']);

      const notification = {
        status: 'unread',
        message: `Order: ${id} shipped with success`,
        time: new Date(),
      };
      io.sockets.emit('notification', notification, ownerId);
      user.notifications.unshift(notification);
      await user.save();

      res.status(200).json(orders);
    } catch (error) {
      res.status(400).json(error.message);
    }
  },
};
