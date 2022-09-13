const User = require('../models/Users');

module.exports = {
  getOrders: async (req, res) => {
    try {
      const users = await User.find({ isAdmin: false }).populate('orders');
      res.json(users);
    } catch (error) {
      res.status(400).send(error.message);
    }
  },

  signup: async (req, res) => {
    const { name, email, password, passwordVerify } = req.body;

    try {
      const user = await User.create({
        name,
        email,
        password,
        passwordVerify,
      });
      res.status(201).json(user);
    } catch (error) {
      if (error.code === 11000) {
        return res.status(400).send('Email already exists');
      }

      res.status(400).send(error.message);
    }
  },

  login: async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await User.findByCredentials(email, password);
      res.json(user);
    } catch (error) {
      res.status(404).send(error.message);
    }
  },
};
