const express = require('express');
const router = express.Router();
const productController = require('./productController');

// Create a new product
router.post('/', productController.createProduct);

// Retrieve a list of all products
router.get('/', productController.getAllProducts);

// Retrieve a specific product by ID
router.get('/:id', productController.getProductById);

// Update a product by ID
router.put('/:id', productController.updateProduct);

// Delete a product by ID
router.delete('/:id', productController.deleteProduct);

module.exports = router;
