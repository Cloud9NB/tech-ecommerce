const router = require('express').Router();
const Product = require('../models/Products');
const User = require('../models/Users');

//get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// create a product
router.post('/', async (req, res) => {
  try {
    const { name, description, price, category, pictures } = req.body;
    const product = await Product.create({
      name,
      description,
      price,
      category,
      pictures,
    });
    const products = await Product.find();

    res.status(200).json(products);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

//update product
router.patch('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const { name, description, price, category, pictures } = req.body;
    const product = await Product.findByIdAndUpdate(id, {
      name,
      description,
      price,
      category,
      pictures,
    });
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

// delete product
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user.isAdmin) res.status(401).json("You don't have permission");

    await Product.findByIdAndDelete(id);
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

// finds product by id with same category and limit to showing 5
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);
    const similar = await Product.find({ category: product.category }).limit(5);
    res.status(200).json({ product, similar });
  } catch (error) {
    res.status(400).json(error.message);
  }
});

module.exports = router;
