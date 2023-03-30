import {Request, Response} from "express"
import TodoService from "../services/TodoService"
import Controller from "./Controller"
import IController from "./Controllerinterface"

const db = require("../db/models")

class TodoController extends Controller implements IController{

  index = async (req: Request, res: Response): Promise<Response> => {
    const todo_service: TodoService = new TodoService(req)
    const todos = await todo_service.getAll()

    return this.successResponse(res, 200, 'success', todos)
  }

  create = async (req: Request, res: Response): Promise<Response> => {
    const todo_service: TodoService = new TodoService(req)
    const todo = await todo_service.store()

    return this.successResponse(res, 201, 'data created', todo)
  }

  show = async (req: Request, res: Response): Promise<Response> => {
    const todo_service: TodoService = new TodoService(req)
    const todo = await todo_service.getOne()

    return this.successResponse(res, 200, 'success', todo)
  }

  update = async (req: Request, res: Response): Promise<Response> => {
    const todo_service: TodoService = new TodoService(req)
    const todo = await todo_service.update()
    
    return this.successResponse(res, 200, 'updated', todo)
  }

  delete = async (req: Request, res: Response): Promise<Response> => {
    const todo_service: TodoService = new TodoService(req)
    const todo = await todo_service.delete()
    
    return this.successResponse(res, 200, 'deleted', todo)
  }
  
}

export default new TodoController()