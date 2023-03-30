import { Request, Response } from "express";
import Authentication from "../utils/Auhentication";
import Controller from "./Controller";

const db = require("../db/models")

class AuthController extends Controller {
  register = async (req:Request, res:Response) :Promise<Response> => {
    let {username, password} = req.body
    let hashed_password = await Authentication.hash(password) 

    const created_user = await db.user.create({username, 'password': hashed_password})
    return this.successResponse(res, 200, "register success", created_user)
  }
  
  login = async (req:Request, res:Response) :Promise<Response> => {
    // cari user berdafarkan username
    let {username, password} = req.body

    const user = await db.user.findOne({
      where: {username: username}
    })

    if (user.isEmpty){
      return this.errorResponse(res, 404, 'User tidak ditemukan')
    }
    
    let compare = await Authentication.comparePass(password, user.password)
    
    if (!compare){
      return this.errorResponse(res, 422, 'UsePassword salah')
    }
    
    const token = Authentication.generateToken(user.id, user.username, user.password)
    return this.successResponse(res, 422, 'Authenticated', {
      user,
      token
    })
  }
  
  me = async (req: Request, res: Response): Promise<Response> => {
    return this.successResponse(res, 200, 'success', req.app.locals.credentials)
  }
}


export default new AuthController()