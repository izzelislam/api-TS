import {Request, Response} from "express"
import Controller from "./Controller"
import IController from "./Controllerinterface"
import GaleryService from "../services/GaleryService"
import { ParamsDictionary } from "express-serve-static-core"
import { ParsedQs } from "qs"

class GaleryCOntroller extends Controller implements IController {
  index = async (req: Request, res: Response): Promise<Response>  => {
    const galery_service = new GaleryService(req)
    const galerries = await galery_service.getAll()
    return this.successResponse(res, 200, 'success', galerries)
  }

  create = async (req: Request, res: Response): Promise<Response> => {
    const galery_service = new GaleryService(req)
    const galery = await galery_service.store()
    return this.successResponse(res, 201, 'success', galery)
  }

  show = async (req: Request, res: Response): Promise<Response> => {
    const galery_service = new GaleryService(req)
    const galery = await galery_service.getOne()
    return this.successResponse(res, 200, 'success', galery)
  }

  update = async (req: Request, res: Response): Promise<Response> => {
    const galery_service = new GaleryService(req)
    const galery = await galery_service.update()
    return this.successResponse(res, 200, 'success', galery)
  }

  delete = async (req: Request, res: Response): Promise<Response> => {
    const galery_service = new GaleryService(req)
    const galery = await galery_service.delete()
    return this.successResponse(res, 200, 'success', galery)
  }

}

export default new GaleryCOntroller()