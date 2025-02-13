import { Request, Response } from 'express'
import { bicycleService } from './bicycle.service'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { StatusCodes } from 'http-status-codes'

const createBicycle = async (req: Request, res: Response) => {
  try {
    const payload = req.body
    const result = await bicycleService.createBicycle(payload)
    res.json({
      message: 'Bicycle created successfully',
      status: true,
      data: result,
    })
  } catch (error) {
    res.json({
      status: false,
      message: 'Failed to create the bicycle',
      error,
    })
  }
}

const getBicycles = catchAsync(async (req, res) => {
  const result = await bicycleService.getBicycles(req.query)

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: 'Bicycles retrieved successfully',
    data: result,
  })
})

const getSpecificBicycle = async (req: Request, res: Response) => {
  try {
    const bicycleId = req.params.bicycleId
    const result = await bicycleService.getSpecificBicycle(bicycleId)
    res.send({
      message: 'Bicycle retrieved successfully',
      status: true,
      data: result,
    })
  } catch (error) {
    res.json({
      status: false,
      message: 'Failed to get specific bicycle',
      error,
    })
  }
}

const updateBicycle = async (req: Request, res: Response) => {
  try {
    const bicycleId = req.params.bicycleId
    const body = req.body
    const result = await bicycleService.updateBicycle(bicycleId, body)
    res.send({
      message: 'Bicycle updated successfully',
      status: true,
      data: result,
    })
  } catch (error) {
    res.json({
      status: false,
      message: 'Failed to update Bicycle',
      error,
    })
  }
}

const deleteBicycle = async (req: Request, res: Response) => {
  try {
    const bicycleId = req.params.bicycleId
    await bicycleService.deleteBicycle(bicycleId)
    res.send({
      message: 'Bicycle deleted successfully',
      status: true,
      data: {},
    })
  } catch (error) {
    res.json({
      status: false,
      message: 'Failed to delete Bicycle',
      error,
    })
  }
}

export const bicycleController = {
  createBicycle,
  getBicycles,
  getSpecificBicycle,
  updateBicycle,
  deleteBicycle,
}
