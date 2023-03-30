import {Request} from "express"
const db = require("../db/models")

class GaleryService {
  credentials:{
    id:number
  }
  body: Request['body']
  params: Request['params']

  constructor (req:Request){
    this.body = req.body
    this.params = req.params
    this.credentials = req.app.locals.credentials
  }

  getAll = async () => {
    const galleries = await db.galery.findAll({
      where: {user_id:this.credentials.id}
    })
    return galleries
  }

  store = async () => {
    const {id} = this.credentials
    const {name} = this.body

    const galery = await db.galery.create({
      user_id: id,
      name
    })

    return galery
  }

  getOne = async() => {
    const {id} = this.params
    const galery =await db.galery.findOne({
      where: {id, user_id:this.credentials.id}
    })
    return galery
  }

  update = async () => {
    const {id} = this.params
    const {name} = this.body

    const galery = await db.galery.update(
      {name},
      {
        where: {id, user_id:this.credentials.id}
      }
    )

    return galery
  }

  delete = async() => {
    const {id} = this.params
    const galery = await db.galery.delete({
      where: {id, user_id:this.credentials.id}
    })
    return galery
  }
}

export default GaleryService