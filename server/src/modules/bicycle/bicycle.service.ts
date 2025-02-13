import QueryBuilder from '../../builder/QueryBuilder'
import { IBicycle } from './bicycle.interface'
import Bicycle from './bicycle.model'

const createBicycle = async (payload: IBicycle): Promise<IBicycle> => {
  const result = await Bicycle.create(payload)
  return result
}

//* Without Query Builder
// const getBicycles = async (searchTerm?: string): Promise<IBicycle[]> => {
//   const filter: {
//     $or?: { name?: RegExp; brand?: RegExp; type?: RegExp }[]
//   } = {}

//   if (searchTerm) {
//     const regex = new RegExp(searchTerm, 'i')
//     filter.$or = [{ name: regex }, { brand: regex }, { type: regex }]
//   }

//   const result = await Bicycle.find(filter)
//   return result
// }

//* With Query Builder
const getBicycles = async (
  query: Record<string, unknown>
): Promise<IBicycle[]> => {
  const queryBuilder = new QueryBuilder(Bicycle.find(), query)
    .search(['name', 'brand', 'type'])
    .filter()
    .paginate()
    .sort()
    .select()

  return await queryBuilder.modelQuery
}

const getSpecificBicycle = async (bicycleId: string) => {
  const result = await Bicycle.findById(bicycleId)
  return result
}

const updateBicycle = async (bicycleId: string, data: IBicycle) => {
  const result = await Bicycle.findByIdAndUpdate(bicycleId, data, {
    new: true,
  })
  return result
}

const deleteBicycle = async (bicycleId: string) => {
  const result = await Bicycle.findByIdAndDelete(bicycleId)
  return result
}

export const bicycleService = {
  createBicycle,
  getBicycles,
  getSpecificBicycle,
  updateBicycle,
  deleteBicycle,
}
