import { Request, Response } from 'express';
import productService from './product.service'; // Add missing import statement

const createProduct = async (req: Request, res: Response) => {
    try {
        const productData = req.body;
        // zod validation schema
        // const validateStudent = studentSchema.parse(student);
        const result = await productService(productData);
        res.status(201).json({ success: true, message: 'Product created successfully', data: result });
    } catch (error) {
        res.status(400).json({ success: false, message: error });
        throw new Error(error as string);
    }
};
export default createProduct;