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
const order_service_1 = __importDefault(require("./order.service"));
const order_validation_1 = require("../../validation/order.validation");
//  Create an order
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const order = req.body;
    try {
        const validationResult = (0, order_validation_1.validateOrder)(order);
        if (!validationResult.success) {
            return res.status(400).json({
                success: false,
                message: "Validation failed",
                errors: validationResult.errors
            });
        }
        // createOrder order with validated data
        const orderData = yield order_service_1.default.createOrder(validationResult.data);
        if (!orderData) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }
        return res.status(201).json({ success: true, message: "Order created successfully!", data: orderData });
    }
    catch (error) {
        return res.status(404).json({ success: false, message: 'Insufficient quantity available in inventory' });
    }
});
// Get all orders
const getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.query.email) {
            const result = yield order_service_1.default.getOrderByEmail(req.query.email);
            if (result.length === 0) {
                return res.status(404).json({ success: false, message: 'No orders found', data: null });
            }
            return res.status(200).json({ success: true, message: "Orders fetched successfully!", data: result });
        }
        else {
            const result = yield order_service_1.default.getAllOrders();
            if (!result) {
                return res.status(404).json({ success: false, message: 'No orders found', data: null });
            }
            return res.status(200).json({ success: true, message: "Orders fetched successfully!", data: result });
        }
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.default = { createOrder, getAllOrders };
