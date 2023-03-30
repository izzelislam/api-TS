import {Request, Response, NextFunction} from "express"
import jwt from "jsonwebtoken"

const auth = (req:Request, res:Response, nex:NextFunction) :any => {
  if (!req.headers.authorization){
    return res.status(401).send({
      'status'  : 401,
      'message' : 'unatenticated'
    })
  }

  const secret_key:string = process.env.JWT_SECRET_KEY || 'secret'
  const token:string      = req.headers.authorization.split(" ")[1]

  try {
    const credentials : string | object = jwt.verify(token, secret_key);
    if (credentials){
      req.app.locals.credentials = credentials
      return nex()
    }
    return res.status(401).send({
      'status' : 401,
      'message' : 'unauthenticated'
    })
  } catch (error) {
    return res.status(500).send({
      'status' : 500,
      'error' : error
    })
  }
}

export default auth