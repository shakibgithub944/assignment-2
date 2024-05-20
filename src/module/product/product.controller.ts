import { Request, Response } from 'express';
import productService from './product.service';

const createProduct = async (req: Request, res: Response) => {
    try {
        const productData = req.body;
        // zod validation schema
        // const validateStudent = studentSchema.parse(student);
        const result = await productService.createProduct(productData);
        res.status(201).json({ success: true, message: 'Product created successfully', data: result });
    } catch (error) {
        res.status(400).json({ success: false, message: error });
        throw new Error(error as string);
    }
};
const getAllProducts = async (req: Request, res: Response) => {

    try {
        const result = await productService.getAllProducts();
        res.status(200).json({ success: true, message: "Products fetched successfully!", data: result });
    } catch (error) {
        res.status(400).json({ success: false, message: "Product not found" });
        throw new Error(error as string);
    }
}
export default { createProduct, getAllProducts };