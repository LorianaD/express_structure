const { Router } = require('express');
const productsController = require('../controllers/products.controller');

const router = Router();

// Définir les routes (les endpoints)
router.get('/test', productsController.test);
router.get('/', productsController.listProducts);
router.get('/:id', productsController.getProductById);
router.post('/', productsController.createProduct);
router.put('/:id', productsController.updateProduct);
router.delete('/:id', productsController.delete);

module.exports = router;