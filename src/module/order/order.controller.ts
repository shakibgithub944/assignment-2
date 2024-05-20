import { Request, Response } from 'express';
import orderService from './order.service';


//  Create an order
const createOrder = async (req: Request, res: Response) => {
    const order = req.body;
    try {
        const orderData = await orderService.createOrder(order);
        return res.status(201).json(orderData);
    } catch (error) {
        res.status(400).json({ message: error.message });
        throw new Error(error as string);
    }
}

export default { createOrder };