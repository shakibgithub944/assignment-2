import { TProduct } from "./product.interface";
import { Product } from "./product.model";


const createProduct = async (product: TProduct) => {
    const productData = await Product.create(product);
    return productData;
};
// Get all products
const getAllProducts = async () => {
    const products = await Product.find();
    return products;
};

export default { createProduct, getAllProducts }; 