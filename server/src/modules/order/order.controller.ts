import { Request, Response } from 'express'
import { orderService } from './order.service'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { StatusCodes } from 'http-status-codes'


const createOrder = catchAsync(async(req, res) => {
  const result = await orderService.createOrder(req.body, req.user, req.ip!)
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Order created succesfully',
    data: result,
  })
})

const verifyPayment = catchAsync(async (req, res) => {
  const order = await orderService.verifyPayment(req.query.order_id as string);
  res.status(200).json({
      success: true,
      message: 'Order verified successfully',
      data: order
  })
});

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

const getAllOrders = catchAsync(async(req, res) => {
  const result = await orderService.getAllOrders();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Orders are getting succesfully',
    data: result,
  })
});

const deleteOrder = catchAsync(async(req, res) => {
  const orderId = req.params.orderId
  await orderService.deleteOrder(orderId)
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Order deleted succesfully",
    data: {}
  })
})

const myOrder = catchAsync(async (req, res) => {
  const {email} = req.params
  const result = await orderService.myOrder(email);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'My Order is getting successfully',
    data: result
  })
})

export const orderController = {
  createOrder,
  verifyPayment,
  getAllOrders,
  deleteOrder,
  myOrder,
  calculateRevenue,
}
