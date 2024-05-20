import express from 'express';
import orderController from './order.controller';


const router = express.Router();

// Order routes start with /Orders
router.post('/orders', orderController.createOrder);



export default router;