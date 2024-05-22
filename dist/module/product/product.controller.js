"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_service_1 = __importDefault(require("./product.service"));
const product_validation_1 = require("../../validation/product.validation");
// Post a product
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productData = req.body;
        // zod validation schema
        const validateProductData = (0, product_validation_1.validateProduct)(productData);
        if (!validateProductData.success) {
            return res.status(400).json({
                success: false,
                message: "Validation failed",
                errors: validateProductData.errors
            });
        }
        // Create product with validated data
        const result = yield product_service_1.default.createProduct(validateProductData.data);
        res.status(201).json({ success: true, message: 'Product created successfully', data: result });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error });
        throw new Error(error);
    }
});
// Get all products
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const searchTerm = (_b = (_a = req.query.searchTerm) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : '';
    try {
        if (searchTerm) {
            const result = yield product_service_1.default.getProductsBySearchTerm(searchTerm);
            if (result.length === 0) {
                res.status(404).json({ success: false, message: "Products not found", data: null });
                return;
            }
            res.status(200).json({ success: true, message: `Products matching search term ${searchTerm} fetched successfully!`, data: result });
        }
        else {
            const result = yield product_service_1.default.getAllProducts();
            if (!result) {
                res.status(404).json({ success: false, message: "Products not found" });
                return;
            }
            res.status(200).json({ success: true, message: "Products fetched successfully!", data: result });
        }
    }
    catch (error) {
        throw new Error(error);
    }
});
// Get product by id
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const result = yield product_service_1.default.getProductById(productId);
        if (!result) {
            res.status(404).json({ success: false, message: "Product not found" });
            return;
        }
        res.status(200).json({ success: true, message: "Product fetched successfully!", data: result });
    }
    catch (error) {
        throw new Error(error);
    }
});
// Update product
const updateProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const productData = req.body;
        const result = yield product_service_1.default.updateProductById(productId, productData);
        if (!result) {
            res.status(404).json({ success: false, message: "Product not found" });
            return;
        }
        res.status(200).json({ success: true, message: "Product updated successfully!", data: result });
    }
    catch (error) {
        throw new Error(error);
    }
});
// Delete product
const deleteProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const result = yield product_service_1.default.deleteProductById(productId);
        if (!result) {
            res.status(404).json({ success: false, message: "Product not found" });
            return;
        }
        res.status(200).json({ success: true, message: "Product deleted successfully!", data: null });
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.default = { createProduct, getAllProducts, getProductById, updateProductById, deleteProductById };
