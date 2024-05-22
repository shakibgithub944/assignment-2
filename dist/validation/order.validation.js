"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateOrder = void 0;
const zod_1 = require("zod");
const orderSchema = zod_1.z.object({
    email: zod_1.z.string().email({ message: "Invalid email address." }),
    productId: zod_1.z.string().min(1, { message: "Product ID is required." }),
    price: zod_1.z.number().nonnegative({ message: "Price must be a non-negative number." }),
    quantity: zod_1.z.number().int().positive({ message: "Quantity must be a positive integer." })
});
const validateOrder = (data) => {
    try {
        const validatedData = orderSchema.parse(data);
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
exports.validateOrder = validateOrder;
