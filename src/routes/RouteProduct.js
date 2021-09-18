const express = require('express');

const router = express.Router();

const ControllerProducts = require('../controllers/ControllerProducts');

router.get('/products', ControllerProducts.getAllProducts);
router.get('/products/:id', ControllerProducts.getProductById);

module.exports = router;