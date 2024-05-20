import mongoose, { Document } from 'mongoose';

// Define the TypeScript interface for the Order
export interface IOrder extends Document {
    email: string;
    productId: mongoose.Schema.Types.ObjectId;
    price: number;
    quantity: number;
}