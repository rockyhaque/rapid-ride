import { Router } from 'express'
import { bicycleController } from './bicycle.controller'

const bicycleRouter = Router()

bicycleRouter.post('/', bicycleController.createBicycle)
bicycleRouter.get('/', bicycleController.getBicycles)
bicycleRouter.get('/:bicycleId', bicycleController.getSpecificBicycle)
bicycleRouter.put('/:bicycleId', bicycleController.updateBicycle)
bicycleRouter.delete('/:bicycleId', bicycleController.deleteBicycle)

export default bicycleRouter
