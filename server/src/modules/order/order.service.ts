import mongoose from 'mongoose'
import Bicycle from '../bicycle/bicycle.model'
import User from '../user/user.model'
import { IOrder } from './order.interface'
import Order from './order.model'
import { orderUtils } from './order.utils'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createOrder = async (payload: IOrder, user: any, client_ip: string) => {
  const session = await mongoose.startSession()
  session.startTransaction()
  try {
    const { bicycle, quantity } = payload

    // Find product
    const productInfo = await Bicycle.findById(bicycle).session(session)
    if (!productInfo) {
      throw new Error('Product not found')
    }

    // Ensure enough stock is available
    if (productInfo.quantity < quantity) {
      throw new Error('Not enough stock available')
    }

    const totalPrice = Number(quantity * productInfo.price)
    const currentUser = await User.findOne({ email: user.email }).session(
      session
    )
    // console.log(currentUser, 'currentuser');
    const buyer = currentUser?._id?.toString()

    // Decrease stock but only if enough is available
    const updatedProduct = await Bicycle.findOneAndUpdate(
      { _id: bicycle, quantity: { $gte: quantity } }, // Ensures enough stock
      { $inc: { quantity: -quantity } },
      { new: true, session }
    )

    if (!updatedProduct) {
      throw new Error('Stock update failed, possibly due to insufficient stock')
    }

    // Create the order inside the transaction
    const [order] = await Order.create([{ ...payload, totalPrice, buyer }], {
      session,
    })

    // Payment integration
    const shurjopayPayload = {
      amount: totalPrice,
      order_id: order._id,
      currency: 'BDT',
      customer_name: currentUser?.name,
      customer_address: payload.address,
      customer_email: currentUser?.email,
      customer_phone: String(payload.contact),
      customer_city: payload.address,
      client_ip,
    }

    const payment = await orderUtils.makePaymentAsync(shurjopayPayload)

    if (payment?.transactionStatus) {
      await Order.findByIdAndUpdate(order._id, {
        transaction: {
          id: payment.sp_order_id,
          transactionStatus: payment.transactionStatus,
        },
      }).session(session)
    }

    await session.commitTransaction()
    session.endSession()

    return { payment, order }
  } catch (error) {
    // Rollback transaction if something goes wrong
    await session.abortTransaction()
    session.endSession()
    throw error
  }
}

const verifyPayment = async (order_id: string) => {
  const verifiedPayment = await orderUtils.verifyPaymentAsync(order_id)

  if (verifiedPayment.length) {
    await Order.findOneAndUpdate(
      {
        'transaction.id': order_id,
      },
      {
        'transaction.bank_status': verifiedPayment[0].bank_status,
        'transaction.sp_code': verifiedPayment[0].sp_code,
        'transaction.sp_message': verifiedPayment[0].sp_message,
        'transaction.transactionStatus': verifiedPayment[0].transaction_status,
        'transaction.method': verifiedPayment[0].method,
        'transaction.date_time': verifiedPayment[0].date_time,
        status:
          verifiedPayment[0].bank_status == 'Success'
            ? 'Paid'
            : verifiedPayment[0].bank_status == 'Failed'
              ? 'Pending'
              : verifiedPayment[0].bank_status == 'Cancel'
                ? 'Cancelled'
                : '',
      }
    )
  }

  // console.log(verifiedPayment);

  return verifiedPayment
}

const getAllOrders = async () => {
  const result = await Order.find()
  return result
}

const deleteOrder = async (id: string) => {
  const result = await Order.findByIdAndDelete(id)
  return result
}

const myOrder = async (email: string) => {
  const result = await Order.find({ email })
  return result
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
  verifyPayment,
  getAllOrders,
  deleteOrder,
  myOrder,
  calculateRevenue,
}
