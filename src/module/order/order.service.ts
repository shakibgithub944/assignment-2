import { IOrder } from "./order.interface";
import Order from "./order.model";
import { Product } from "../product/product.model";


// Create an order
// Create an order
const createOrder = async (order: IOrder) => {
    try {
        // Fetch the product
        const product = await Product.findById(order.productId);
        if (!product) {
            throw new Error('Product not found');
        }
        // Check available quantity
        if (order.quantity > product.inventory.quantity) {
            const error = new Error('Insufficient quantity available in inventory');
            throw error;
        }
        // Create the order
        const orderData = await Order.create(order);

        // Update the inventory
        product.inventory.quantity -= order.quantity;
        product.inventory.inStock = product.inventory.quantity > 0;

        // If quantity is zero, set inStock to false
        if (product.inventory.quantity === 0) {
            product.inventory.inStock = false;
        }
        // Save the updated product
        await product.save();
        return orderData;
    } catch (error) {
        throw new Error(error as string);
    }
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