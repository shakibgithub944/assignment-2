import { z } from "zod";
import { IOrder } from "../module/order/order.interface";

const orderSchema = z.object({
    email: z.string().email({ message: "Invalid email address." }),
    productId: z.string().min(1, { message: "Product ID is required." }),
    price: z.number().nonnegative({ message: "Price must be a non-negative number." }),
    quantity: z.number().int().positive({ message: "Quantity must be a positive integer." })
});

const validateOrder = (data: IOrder) => {
    try {
        const validatedData = orderSchema.parse(data);
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

export { validateOrder };
