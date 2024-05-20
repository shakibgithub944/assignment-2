import mongoose from 'mongoose';
import { IOrder } from './order.interface';


// Order schema
const orderSchema = new mongoose.Schema<IOrder>({
    email: { type: String, required: true },
    productId: { type: mongoose.Schema.Types.ObjectId, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true }
});

// Creating the Order model
const Order = mongoose.model<IOrder>('Order', orderSchema);

export default Order;
