"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateProduct = void 0;
const zod_1 = require("zod");
const variantSchema = zod_1.z.object({
    type: zod_1.z.string().min(1, { message: "Variant type is required." }),
    value: zod_1.z.string().min(1, { message: "Variant value is required." })
});
const inventorySchema = zod_1.z.object({
    quantity: zod_1.z.number().int().nonnegative({ message: "Inventory quantity must be a non-negative integer." }),
    inStock: zod_1.z.boolean()
});
const productSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, { message: "Product name is required." }),
    description: zod_1.z.string().min(1, { message: "Product description is required." }),
    price: zod_1.z.number().nonnegative({ message: "Product price must be a non-negative number." }),
    category: zod_1.z.string().min(1, { message: "Product category is required." }),
    tags: zod_1.z.array(zod_1.z.string().min(1, { message: "Tag cannot be empty." })),
    variants: zod_1.z.array(variantSchema),
    inventory: inventorySchema
});
const validateProduct = (data) => {
    try {
        const validatedData = productSchema.parse(data);
        return { success: true, data: validatedData };
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
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
exports.validateProduct = validateProduct;
