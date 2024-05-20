import { TProduct } from "./product.interface";
import { Product } from "./product.model";


const productService = async (product: TProduct) => {
    const productData = await Product.create(product);
    return productData;
};

export default productService; 