import {Request, Response, NextFunction} from "express"
import {check, validationResult} from "express-validator"

const validate = [
  check('description').isString(),
  (req: Request, res: Response, nex: NextFunction) => {
    const errors = validationResult(req);
    
    if(!errors.isEmpty()){
      return res.status(422).send({errors: errors.array()})
    }

    return nex()
  }
]

export default validate