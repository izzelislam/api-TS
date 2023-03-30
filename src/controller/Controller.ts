import {Response} from "express"

abstract class Controller {

  public successResponse = (res: Response, status:number=200,  message:string ="", data:any="") :Response => {
    return res.status(status).send({
      'status' : status,
      'message' : message,
      'data': data
    })
  }

  public errorResponse = (res: Response, status:number=500,  message:string ="", data:any="") :Response => {
    return res.status(status).send({
      'status' : status,
      'message' : message,
      'data': data
    })
  }
}

export default Controller