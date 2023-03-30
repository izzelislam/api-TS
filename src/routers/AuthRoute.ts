import AuthController from "../controller/AuthController";
import BaseRouter from "./BaseRoute";

// middleware
import validate from "../middlewares/AuthValidator";
import auth from "../middlewares/AuthMiddleware";

class AuthRouter extends BaseRouter{
  routes(): void {
    this.router.post('/register', validate, AuthController.register)
    this.router.post('/login', validate, AuthController.login)
    this.router.get('/me', auth, AuthController.me)
  }
}

export default new AuthRouter().router