const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
  {
    products: {
      type: Object,
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    status: {
      type: String,
      default: 'Processing',
    },
    total: {
      type: Number,
      default: 0,
    },
    count: {
      type: Number,
      default: 0,
    },
    date: {
      type: String,
      default: new Date().toISOString().split('T')[0],
    },
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    postalCode: {
      type: String,
    },
    country: {
      type: String,
    },
  },
  { minimize: false }
);

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
