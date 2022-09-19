const router = require('express').Router();
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getSimilarProductByProductId,
  getProductByCategory,
} = require('../controllers/products');

router.get('/', getAllProducts);
router.post('/', createProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.get('/:id', getSimilarProductByProductId);
router.get('/category/:category', getProductByCategory);

module.exports = router;
