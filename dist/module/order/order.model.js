"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// Order schema
const orderSchema = new mongoose_1.default.Schema({
    email: { type: String, required: true },
    productId: { type: mongoose_1.default.Schema.Types.ObjectId, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true }
});
// Creating the Order model
const Order = mongoose_1.default.model('Order', orderSchema);
exports.default = Order;
