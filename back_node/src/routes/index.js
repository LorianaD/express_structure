// extrait router de express
const { Router } = require('express');

// crée le router
const router = Router();

// montage des sous routes
// route produits /monapi/products
router.use('/products', require('./products.routes'));

// exporte le router
module.exports = router;