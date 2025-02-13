import { Types } from 'mongoose'

export interface IOrder {
  email: string
  bicycle: Types.ObjectId
  quantity: number
  totalPrice: number
}
