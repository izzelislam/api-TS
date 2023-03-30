import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

class Authentication {
  public static hash = (pass:string) :Promise<string> => {
    return bcrypt.hash(pass, 10)
  }

  public static comparePass =  async (pass:string, encryptedpass:string) :Promise<boolean> => {
    let result = await bcrypt.compare(pass, encryptedpass)
    return result
  }

  public static generateToken = (id:number, username:string, password:string) :string => {
    const secret_key:string = process.env.JWT_SECRET_KEY || 'secret'
    const token: string =  jwt.sign({id, username, password}, secret_key)
    return token
  }
}

export default Authentication