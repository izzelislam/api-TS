import UserController from "../controller/UserController";
import auth from "../middlewares/AuthMiddleware";
import BaseRouter from "./BaseRoute";

class UserRouter extends BaseRouter{

  public routes(): void {
    this.router.get('/', auth, UserController.index)
    this.router.post('/', UserController.create)
    this.router.get('/:id', UserController.show)
    this.router.put('/:id', UserController.update)
    this.router.delete('/:id', UserController.delete)
  }
}

export default new UserRouter().router