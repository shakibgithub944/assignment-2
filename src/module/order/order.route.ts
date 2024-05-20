import express from 'express';
import createStudent from './order.controller';


const router = express.Router();

router.post('/products', createStudent);

export default router;