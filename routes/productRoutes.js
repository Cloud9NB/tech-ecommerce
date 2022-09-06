const router = require('express').Router();
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductByCategory,
} = require('../controllers/products');

router.get('/', getAllProducts);
router.post('/', createProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.get('/:id', getProductByCategory);

module.exports = router;
