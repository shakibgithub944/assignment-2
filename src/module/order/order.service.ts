import { IOrder } from "./order.interface";
import Order from "./order.model";



const createOrder = async (order: IOrder) => {
    const orderData = await Order.create(order);
    return orderData;
};

export default { createOrder };