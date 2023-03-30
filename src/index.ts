import express, {Application, Request, Response} from "express"
import bodyParser from "body-parser"
import morgan from "morgan"
import compression from "compression"
import helmet from "helmet"
import cors from "cors"
import {config as dotenv} from "dotenv"

// router
import UserRoute from "./routers/UserRoute"
import AuthRoute from "./routers/AuthRoute"
import TodoRoute from "./routers/TodoRoute"
import GaleryRoute from "./routers/GaleryRoute"

class App {
  public app :Application

  constructor(){
    this.app = express()
    this.plugins()
    this.routes()
    dotenv()
  }

  protected plugins() :void {
    this.app.use(express.urlencoded({extended: false}))
    this.app.use(bodyParser.json())
    this.app.use(morgan('dev'))
    this.app.use(compression())
    this.app.use(helmet())
    this.app.use(cors())
  }
  
  protected routes() :void{
    this.app.route('/').get((req:Request, res:Response) => {
      res.send("route ts")
    })

    this.app.use('/api/v1/users', UserRoute) 
    this.app.use('/api/v1/auth', AuthRoute) 
    this.app.use('/api/v1/todo', TodoRoute) 
    this.app.use('/api/v1/galery', GaleryRoute) 
  }
}

const port:number = 8000
const app = new App().app
app.listen(port, () => {
  console.log("app runing on port"+port)
  console.log(process.env.DB_HOST)
})
