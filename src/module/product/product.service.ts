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
// Search product by text
const getProductsBySearchTerm = async (searchTerm: string): Promise<TProduct[]> => {
    try {
        const regex = new RegExp(searchTerm, 'i'); // Case-insensitive regex for search term
        const products = await Product.find({
            $or: [
                { name: regex },
                { description: regex },
                { category: regex },
                { tags: regex }
            ]
        });
        return products;
    } catch (error) {
        throw new Error('Error fetching products: ');
    }
};
// Get product by id
const getProductById = async (productId: string) => {
    const product = await Product.findById(productId);
    return product;
};

// Update product
const updateProductById = async (productId: string, product: TProduct) => {
    const updatedProduct = await Product.findByIdAndUpdate(productId, product, { new: true });
    return updatedProduct;
}


//  Delete product
const deleteProductById = async (productId: string) => {
    const deletedProduct = await Product.findByIdAndDelete(productId);
    return deletedProduct;
}
export default {
    createProduct,
    getAllProducts,
    getProductById,
    updateProductById,
    deleteProductById,
    getProductsBySearchTerm
}; 