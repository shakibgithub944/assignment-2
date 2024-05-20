import express from 'express';
import productController from './product.controller';


const router = express.Router();

// Product routes start with /products
router.post('/products', productController.createProduct);
router.get('/products', productController.getAllProducts);
router.get('/products/:productId', productController.getProductById);
router.put('/products/:productId', productController.updateProductById);
router.delete('/products/:productId', productController.deleteProductById);
// product routes end



export default router;