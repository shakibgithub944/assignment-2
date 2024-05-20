
import mongoose from 'mongoose';
import { TProduct, TInventory, TVariant } from './order.interface';
const { Schema } = mongoose;

// Define the Variant schema
const variantSchema = new Schema<TVariant>({
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
const inventorySchema = new Schema<TInventory>({
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
const productSchema = new Schema<TProduct>({
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
export const Product = mongoose.model<TProduct>('Product', productSchema);
