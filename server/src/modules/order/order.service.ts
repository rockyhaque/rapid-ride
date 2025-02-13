import Bicycle from '../bicycle/bicycle.model'
import { IOrder } from './order.interface'
import Order from './order.model'

const createOrder = async (payload: IOrder): Promise<IOrder> => {
  const { bicycle, quantity } = payload

  const bicycleData = await Bicycle.findById(bicycle)

  if (!bicycleData) {
    throw new Error('Bicycle not found')
  }

  if (bicycleData.quantity < quantity) {
    throw new Error('Insufficient stock')
  }

  bicycleData.quantity -= quantity
  bicycleData.inStock = bicycleData.quantity > 0
  await bicycleData.save()

  const order = await Order.create(payload)
  return order
}

const calculateRevenue = async (): Promise<{ totalRevenue: number }> => {
  const result = await Order.aggregate([
    {
      $lookup: {
        from: 'bicycles', // Bicycle collection name
        localField: 'bicycle',
        foreignField: '_id',
        as: 'bicycleDetails',
      },
    },
    {
      $unwind: '$bicycleDetails',
    },
    {
      $group: {
        _id: null,
        totalRevenue: {
          $sum: { $multiply: ['$quantity', '$bicycleDetails.price'] },
        },
      },
    },
    {
      $project: {
        _id: 0,
        totalRevenue: 1,
      },
    },
  ])

  return result[0] || { totalRevenue: 0 }
}

export const orderService = {
  createOrder,
  calculateRevenue,
}
