import { Request, Response } from 'express';
import productService from './product.service';
import { validateProduct } from '../../validation/product.validation';



// Post a product
const createProduct = async (req: Request, res: Response) => {
    try {
        const productData = req.body;
        // zod validation schema
        const validateProductData = validateProduct(productData);
        if (!validateProductData.success) {
            return res.status(400).json({
                success: false,
                message: "Validation failed",
                errors: validateProductData.errors
            });
        }
        const result = await productService.createProduct(productData);
        res.status(201).json({ success: true, message: 'Product created successfully', data: result });
    } catch (error) {
        res.status(400).json({ success: false, message: error });
        throw new Error(error as string);
    }
};


// Get all products
const getAllProducts = async (req: Request, res: Response) => {
    const searchTerm: string = req.query.searchTerm?.toString() ?? '';
    try {
        if (searchTerm) {
            const result = await productService.getProductsBySearchTerm(searchTerm);
            if (result.length === 0) {
                res.status(404).json({ success: false, message: "Products not found", data: null });
                return;
            }
            res.status(200).json({ success: true, message: `Products matching search term ${searchTerm} fetched successfully!`, data: result });
        } else {
            const result = await productService.getAllProducts();
            if (!result) {
                res.status(404).json({ success: false, message: "Products not found" });
                return;
            }
            res.status(200).json({ success: true, message: "Products fetched successfully!", data: result });
        }
    } catch (error) {
        throw new Error(error as string);
    }
}


// Get product by id
const getProductById = async (req: Request, res: Response) => {
    try {
        const productId = req.params.productId;
        const result = await productService.getProductById(productId);
        if (!result) {
            res.status(404).json({ success: false, message: "Product not found" });
            return;
        }
        res.status(200).json({ success: true, message: "Product fetched successfully!", data: result });
    } catch (error) {
        throw new Error(error as string);
    }
}


// Update product
const updateProductById = async (req: Request, res: Response) => {
    try {
        const productId = req.params.productId;
        const productData = req.body;
        const result = await productService.updateProductById(productId, productData);
        if (!result) {
            res.status(404).json({ success: false, message: "Product not found" });
            return;
        }
        res.status(200).json({ success: true, message: "Product updated successfully!", data: result });
    } catch (error) {
        throw new Error(error as string);
    }

}

// Delete product

const deleteProductById = async (req: Request, res: Response) => {
    try {
        const productId = req.params.productId;
        const result = await productService.deleteProductById(productId);
        if (!result) {
            res.status(404).json({ success: false, message: "Product not found" });
            return;
        }
        res.status(200).json({ success: true, message: "Product deleted successfully!", data: null });
    } catch (error) {
        throw new Error(error as string);
    }

}

export default { createProduct, getAllProducts, getProductById, updateProductById, deleteProductById };