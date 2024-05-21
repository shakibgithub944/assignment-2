import { IOrder } from "./order.interface";
import Order from "./order.model";


// Create an order
const createOrder = async (order: IOrder) => {
    const orderData = await Order.create(order);
    return orderData;
};

// Get all orders
const getAllOrders = async () => {
    const orders = await Order.find();
    return orders;
};

// Get order by email
const getOrderByEmail = async (email: string) => {
    const order = await Order.find({ email: email })
    return order;
}

export default { createOrder, getAllOrders, getOrderByEmail };