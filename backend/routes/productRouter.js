const express = require('express');
const Product = require('../model/Product');
const productController = require('../controller/productController');


const productRouter = express.Router();

// Route to fetch all products
productRouter.get('/products', productController.fetchProducts);

productRouter.get('/product/:productId', productController.getProductById);

productRouter.post('/add-product', productController.addProduct);

module.exports = productRouter;