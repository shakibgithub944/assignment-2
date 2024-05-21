import { z } from "zod";
import { TProduct } from "../module/product/product.interface";

const variantSchema = z.object({
    type: z.string().min(1, { message: "Variant type is required." }),
    value: z.string().min(1, { message: "Variant value is required." })
});

const inventorySchema = z.object({
    quantity: z.number().int().nonnegative({ message: "Inventory quantity must be a non-negative integer." }),
    inStock: z.boolean()
});

const productSchema = z.object({
    name: z.string().min(1, { message: "Product name is required." }),
    description: z.string().min(1, { message: "Product description is required." }),
    price: z.number().nonnegative({ message: "Product price must be a non-negative number." }),
    category: z.string().min(1, { message: "Product category is required." }),
    tags: z.array(z.string().min(1, { message: "Tag cannot be empty." })),
    variants: z.array(variantSchema),
    inventory: inventorySchema
});

const validateProduct = (data: TProduct) => {
    try {
        const validatedData = productSchema.parse(data);
        return { success: true, data: validatedData };
    } catch (error) {
        if (error instanceof z.ZodError) {
            return {
                success: false,
                errors: error.errors.map(err => ({
                    path: err.path.join('.'),
                    message: err.message
                }))
            };
        }
        throw error;
    }
};

export { validateProduct };
