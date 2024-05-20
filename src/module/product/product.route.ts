import express from 'express';
import productController from './product.controller';


const router = express.Router();

router.post('/products', productController.createProduct);
router.get('/products', productController.getAllProducts);
router.get('/products/:productId', productController.getProductById);
router.put('/products/:productId', productController.updateProduct);
export default router;