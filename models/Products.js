const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'is required'],
    },
    description: {
      type: String,
      required: [true, 'is required'],
    },
    price: {
      type: String,
      required: [true, 'is required'],
    },
    category: {
      type: String,
      required: [true, 'is required'],
    },
    pictures: {
      type: Array,
      required: true,
    },
  },
  { minimize: false }
);

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
