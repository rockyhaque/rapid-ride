import { Router } from 'express'
import { orderController } from './order.controller'

const orderRouter = Router()

orderRouter.post('/create-order', orderController.createOrder)
orderRouter.get('/all-orders', orderController.getAllOrders)
orderRouter.delete('/delete-order/:orderId', orderController.deleteOrder)
orderRouter.get('/my-order/:email', orderController.myOrder)
orderRouter.get('/revenue', orderController.calculateRevenue)

export default orderRouter
