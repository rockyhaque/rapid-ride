import { Types } from 'mongoose'

export interface IOrder {
  email: string
  bicycle: Types.ObjectId
  quantity: number
  totalPrice: number
  status?: string
  address?: string;
  contact?: number;
  orderNote?:string;
}
