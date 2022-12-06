import UserModel from "../models/user.schema.js"
import {compare} from 'bcrypt'
import {SignJWT} from 'jose'
import {serialize} from 'cookie'


const userLoginController = async(req,res) => {
    
    const {username, password} = req.body

    const existingUserByEmail = await UserModel.findOne({username}).exec()
    // Verificamos email
    if(!existingUserByEmail) return res.status(401).send({message: 'Credenciales incorrectas'})
    // Verificamos la contraseña
    const checkPassword = await compare(password, existingUserByEmail.password)

    if(!checkPassword) return res.status(401).send({message: 'Credenciales incorrectas'})

    const encoder = new TextEncoder();
    // Generamos JWT (identificador para que usuario pueda obtener sus datos)
    const jwtConstructor = new SignJWT({id: existingUserByEmail._id})
    const jwt = await jwtConstructor.setProtectedHeader({
        alg: 'HS256', // Asignamos el algoritmo a utilizar
        typ: 'JWT' // Asignamos el tipo
    }).setIssuedAt().setExpirationTime('7d').sign(encoder.encode(process.env.JWT_PRIVATE_KEY)); // Definimos cuando se genero y cuando queremos que caduque


    // Retornamos el jwt
    /*
    const serialized = serialize('tokenJWT',jwt, {
        httpOnly: true,
        sameSite: 'strict'
    })
    res.setHeader('Set-Cookie', 'newUser=true')
    */
    return res.send({jwt})
    //return res.json('Login successfuly')
    //res.json('you got the cookies')
  


}

export default userLoginController