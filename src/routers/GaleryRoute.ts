import GaleryController from "../controller/GaleryController";
import BaseRouter from "./BaseRoute";
import auth from "../middlewares/AuthMiddleware";

class GaleryRoute extends BaseRouter{
  routes(): void {
    this.router.get('/', auth, GaleryController.index)
    this.router.post('/', auth, GaleryController.create)
    this.router.get('/:id', auth, GaleryController.show)
    this.router.put('/:id', auth, GaleryController.update)
    this.router.delete('/:id', auth, GaleryController.delete)
  }
}

export default new GaleryRoute().router