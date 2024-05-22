"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
// Define the Variant schema
const variantSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    }
});
// Define the Inventory schema
const inventorySchema = new Schema({
    quantity: {
        type: Number,
        required: true
    },
    inStock: {
        type: Boolean,
        required: true
    }
});
// Define the Product schema
const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: true
    },
    variants: {
        type: [variantSchema],
        required: true
    },
    inventory: {
        type: inventorySchema,
        required: true
    }
});
// Create the Product model
exports.Product = mongoose_1.default.model('Product', productSchema);
