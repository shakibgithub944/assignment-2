import { Request, Response } from 'express';
import orderService from './order.service';
import { validateOrder } from '../../validation/order.validation';
import { IOrder } from './order.interface';

//  Create an order
const createOrder = async (req: Request, res: Response) => {
  const order = req.body;
  try {
    const validationResult = validateOrder(order);
    if (!validationResult.success) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: validationResult.errors,
      });
    }
    // createOrder order with validated data
    const orderData = await orderService.createOrder(
      validationResult.data as unknown as IOrder,
    );
    if (!orderData) {
      return res
        .status(404)
        .json({ success: false, message: 'Product not found' });
    }
    return res
      .status(201)
      .json({
        success: true,
        message: 'Order created successfully!',
        data: orderData,
      });
  } catch (error) {
    return res
      .status(404)
      .json({
        success: false,
        message: 'Insufficient quantity available in inventory',
      });
  }
};

// Get all orders

const getAllOrders = async (req: Request, res: Response) => {
  try {
    if (req.query.email) {
      const result = await orderService.getOrderByEmail(
        req.query.email as string,
      );
      if (result.length === 0) {
        return res
          .status(404)
          .json({ success: false, message: 'No orders found', data: null });
      }
      return res
        .status(200)
        .json({
          success: true,
          message: 'Orders fetched successfully!',
          data: result,
        });
    } else {
      const result = await orderService.getAllOrders();
      if (result.length === 0) {
        return res
          .status(404)
          .json({ success: false, message: 'No orders found', data: null });
      }
      return res
        .status(200)
        .json({
          success: true,
          message: 'Orders fetched successfully!',
          data: result,
        });
    }
  } catch (error) {
    throw new Error(error as string);
  }
};

export default { createOrder, getAllOrders };
