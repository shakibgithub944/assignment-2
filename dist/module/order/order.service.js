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
const order_model_1 = __importDefault(require("./order.model"));
const product_model_1 = require("../product/product.model");
// Create an order
// Create an order
const createOrder = (order) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Fetch the product
        const product = yield product_model_1.Product.findById(order.productId);
        if (!product) {
            return product;
        }
        // Check available quantity
        if (order.quantity > product.inventory.quantity) {
            const error = new Error('Insufficient quantity available in inventory');
            throw error;
        }
        // Create the order
        const orderData = yield order_model_1.default.create(order);
        // Update the inventory
        product.inventory.quantity -= order.quantity;
        product.inventory.inStock = product.inventory.quantity > 0;
        // If quantity is zero, set inStock to false
        if (product.inventory.quantity === 0) {
            product.inventory.inStock = false;
        }
        // Save the updated product
        yield product.save();
        return orderData;
    }
    catch (error) {
        throw new Error(error);
    }
});
// Get all orders
const getAllOrders = () => __awaiter(void 0, void 0, void 0, function* () {
    const orders = yield order_model_1.default.find();
    return orders;
});
// Get order by email
const getOrderByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield order_model_1.default.find({ email: email });
    return order;
});
exports.default = { createOrder, getAllOrders, getOrderByEmail };
