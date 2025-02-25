import { Schema, model } from 'mongoose'

const orderSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Your email is required'],
    },
    bicycle: {
      type: Schema.Types.ObjectId,
      ref: 'Bicycle',
      required: [true, 'bicycle is required'],
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
      min: [1, 'Quantity must be at least 1'],
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'cancelled', 'delivered'],
      default: 'pending',
    },
    contact: {
      type: Number,
    },
    address: {
      type: String,
    },
    orderNote: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

const Order = model('Order', orderSchema)
export default Order
