import { Request, Response } from 'express';
import orderService from './order.service'; // Add missing import statement

const createProduct = async (req: Request, res: Response) => {
    try {
        const productData = req.body;
        // zod validation schema
        // const validateStudent = studentSchema.parse(student);
        const result = await orderService(productData);
        res.status(201).json({ success: true, message: 'Order created successfully', data: result });
    } catch (error) {
        res.status(400).json({ success: false, message: error });
        throw new Error(error as string);
    }
};
export default createProduct;