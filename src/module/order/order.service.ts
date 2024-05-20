import { TProduct } from "./order.interface";
import { Product } from "./order.model";


const orderService = async (product: TProduct) => {
    const orderData = await Product.create(product);
    return orderData;
};

export default orderService; 