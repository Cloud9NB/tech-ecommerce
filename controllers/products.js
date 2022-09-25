const Product = require('../models/Products');
const User = require('../models/Users');

module.exports = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      res.status(400).send(error.message);
    }
  },

  createProduct: async (req, res) => {
    try {
      const { name, description, price, category, images } = req.body;
      await Product.create({ name, description, price, category, images });
      const products = await Product.find();

      res.status(201).json(products);
    } catch (error) {
      res.status(400).json(error.message);
    }
  },

  updateProduct: async (req, res) => {
    const { id } = req.params;

    try {
      const { name, description, price, category, images } = req.body;
      await Product.findByIdAndUpdate(id, {
        name,
        description,
        price,
        category,
        images,
      });

      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      res.status(400).json(error.message);
    }
  },

  deleteProduct: async (req, res) => {
    const { id } = req.params;
    const { userId } = req.body;

    try {
      const user = await User.findById(userId);

      if (!user.isAdmin) res.status(401).json("You don't have permission");
      await Product.findByIdAndDelete(id);

      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      console.log('error 5');

      res.status(400).json(error.message);
    }
  },

  getSimilarProductByProductId: async (req, res) => {
    const { id } = req.params;

    try {
      const product = await Product.findById(id);
      const similar = await Product.find({ category: product.category }).limit(
        5
      );
      res.status(200).json({ product, similar });
    } catch (error) {
      res.status(400).json(error.message);
    }
  },

  getProductByCategory: async (req, res) => {
    const { category } = req.params;

    try {
      let products;

      if (category === 'all') {
        products = await Product.find().sort([['date', -1]]);
      } else {
        products = await Product.find({ category });
      }

      res.status(200).json(products);
    } catch (error) {
      res.status(400).json(error.message);
    }
  },
};
