import TodoController from "../controller/TodoController";
import auth from "../middlewares/AuthMiddleware";
import BaseRouter from "./BaseRoute";
import validate from "../middlewares/TodoValidator";

class TodoRouter extends BaseRouter{

  public routes(): void {
    this.router.get('/', auth, TodoController.index)
    this.router.post('/', auth, validate, TodoController.create)
    this.router.get('/:id', auth, TodoController.show)
    this.router.put('/:id', auth, validate, TodoController.update)
    this.router.delete('/:id', auth, TodoController.delete)
  }
}

export default new TodoRouter().router