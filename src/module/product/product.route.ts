import express from 'express';
import createProduct from './product.controller';


const router = express.Router();

router.post('/products', createProduct);

export default router;