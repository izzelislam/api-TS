import e, {Request, Response} from "express"
import IController from "./Controllerinterface"

let data: any[] = [
  {
    'id'   : 1,
    'name' : 'jono'
  },
  {
    'id'   : 2,
    'name' : 'due'
  },
  {
    'id'   : 3,
    'name' : 'joko'
  },
  {
    'id'   : 4,
    'name' : 'Marup'
  },
]

class UserController implements IController{
  index(req: Request, res: Response): Response{
    return res.send(data)
  }

  create(req: Request, res: Response): Response{
    const { id, name } = req.body
    
    data.push({
      'id' : id,
      'nmae' : name
    })

    return res.send(req.body)
  }

  show(req: Request, res: Response): Response{
    const {id} = req.params
    let person = data.find(el => el.id == id)
    return res.send(person)
  }

  update(req: Request, res: Response): Response{
    const {id} = req.params
    const {name} = req.body

    let person = data.find(el => el.id == id)
    person.name = name

    return res.send("updated")
  }

  delete(req: Request, res: Response): Response{
    const {id} = req.params
    
    let person = data.filter(el => el.id != id)
    
    return res.send("deleted")
  }
  
}

export default new UserController()