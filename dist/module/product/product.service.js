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
Object.defineProperty(exports, "__esModule", { value: true });
const product_model_1 = require("./product.model");
const createProduct = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const productData = yield product_model_1.Product.create(product);
    return productData;
});
// Get all products
const getAllProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield product_model_1.Product.find();
    return products;
});
// Search product by text
const getProductsBySearchTerm = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const regex = new RegExp(searchTerm, 'i'); // Case-insensitive regex for search term
        const products = yield product_model_1.Product.find({
            $or: [
                { name: regex },
                { description: regex },
                { category: regex },
                { tags: regex }
            ]
        });
        return products;
    }
    catch (error) {
        throw new Error('Error fetching products: ');
    }
});
// Get product by id
const getProductById = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield product_model_1.Product.findById(productId);
    return product;
});
// Update product
const updateProductById = (productId, product) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedProduct = yield product_model_1.Product.findByIdAndUpdate(productId, product, { new: true });
    return updatedProduct;
});
//  Delete product
const deleteProductById = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedProduct = yield product_model_1.Product.findByIdAndDelete(productId);
    return deletedProduct;
});
exports.default = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProductById,
    deleteProductById,
    getProductsBySearchTerm
};
