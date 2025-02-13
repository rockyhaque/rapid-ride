import { Request, Response } from 'express'
import { orderService } from './order.service'

const createOrder = async (req: Request, res: Response): Promise<void> => {
  try {
    const orderData = req.body
    const newOrder = await orderService.createOrder(orderData)

    res.status(201).json({
      message: 'Order created successfully',
      status: true,
      data: newOrder,
    })
  } catch (error: unknown) {
    let statusCode = 400

    let errorMessage = 'Something went wrong'
    if (error instanceof Error) {
      errorMessage = error.message
      if (error.message === 'bicycle not found') {
        statusCode = 404
      } else if (error.message === 'Insufficient stock') {
        statusCode = 422
      }
    }

    res.status(statusCode).json({
      message: errorMessage,
      status: false,
      error: error instanceof Error ? error.name : 'Unknown Error',
    })
  }
}

const calculateRevenue = async (req: Request, res: Response): Promise<void> => {
  try {
    const revenue = await orderService.calculateRevenue()

    res.status(200).json({
      message: 'Revenue calculated successfully',
      status: true,
      data: revenue,
    })
  } catch (error: unknown) {
    res.status(500).json({
      message: 'Failed to calculate revenue',
      status: false,
      error: error instanceof Error ? error.message : 'Internal Server Error',
    })
  }
}

//* Get all orders
// const getAllOrders = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const orders = await orderService.getAllOrders();
//     res.status(200).json({ status: true, data: orders });
//   } catch (error: unknown) {
//     res.status(500).json({
//       message: 'Failed to retrieve orders',
//       status: false,
//     });
//   }
// };

//* Get a single order by ID
// const getOrderById = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const orderId = req.params.id;
//     const order = await orderService.getOrderById(orderId);
//     if (!order) {
//       res.status(404).json({ message: 'Order not found', status: false });
//       return;
//     }
//     res.status(200).json({ status: true, data: order });
//   } catch (error: unknown) {
//     res.status(500).json({ message: 'Failed to retrieve order', status: false });
//   }
// };

//* Update an order
// const updateOrder = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const orderId = req.params.id;
//     const updatedData = req.body;
//     const updatedOrder = await orderService.updateOrder(orderId, updatedData);
//     if (!updatedOrder) {
//       res.status(404).json({ message: 'Order not found', status: false });
//       return;
//     }
//     res.status(200).json({ message: 'Order updated successfully', status: true, data: updatedOrder });
//   } catch (error: unknown) {
//     res.status(400).json({ message: 'Failed to update order', status: false });
//   }
// };

//* Delete an order
// const deleteOrder = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const orderId = req.params.id;
//     const deletedOrder = await orderService.deleteOrder(orderId);
//     if (!deletedOrder) {
//       res.status(404).json({ message: 'Order not found', status: false });
//       return;
//     }
//     res.status(200).json({ message: 'Order deleted successfully', status: true });
//   } catch (error: unknown) {
//     res.status(500).json({ message: 'Failed to delete order', status: false });
//   }
// };

export const orderController = {
  createOrder,
  calculateRevenue,
}
