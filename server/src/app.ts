import express, { Request, Response } from 'express'
import { globalErrorHandler } from './middlewares/globalErrorHandler'
import authRouter from './modules/auth/auth.route'
import userRouter from './modules/user/user.route'
import bicycleRouter from './modules/bicycle/bicycle.route'
import orderRouter from './modules/order/order.route'

const app = express()

// middleware
app.use(express.json())

app.use('/api/auth', authRouter)
app.use('/api/users', userRouter)
app.use('/api/bicycles', bicycleRouter)
app.use('/api/orders', orderRouter)

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Bi Cycle Store Server is running',
  })
})

app.use('*', (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  })
})

// Global Error Handler
app.use(globalErrorHandler)

export default app
