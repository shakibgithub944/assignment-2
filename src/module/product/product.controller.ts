import { Request, Response } from 'express';
import productService from './product.service';



// Post a product
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


// Get all products
const getAllProducts = async (req: Request, res: Response) => {

    try {
        const result = await productService.getAllProducts();
        res.status(200).json({ success: true, message: "Products fetched successfully!", data: result });
    } catch (error) {
        res.status(400).json({ success: false, message: "Product not found" });
        throw new Error(error as string);
    }
}


// Get product by id
const getProductById = async (req: Request, res: Response) => {
    try {
        const productId = req.params.productId;
        const result = await productService.getProductById(productId);
        res.status(200).json({ success: true, message: "Product fetched successfully!", data: result });
    } catch (error) {
        res.status(400).json({ success: false, message: "Product not found" });
        throw new Error(error as string);
    }
}


// Update product
const updateProduct = async (req: Request, res: Response) => {
    try {
        const productId = req.params.productId;
        const productData = req.body;
        const result = await productService.updateProduct(productId, productData);
        res.status(200).json({ success: true, message: "Product updated successfully!", data: result });
    } catch (error) {
        res.status(400).json({ success: false, message: "Product not found" });
        throw new Error(error as string);
    }

}

export default { createProduct, getAllProducts, getProductById, updateProduct };