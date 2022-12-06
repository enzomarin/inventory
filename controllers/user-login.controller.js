import UserModel from "../models/user.schema.js"
import jwt from 'jsonwebtoken'
import {compare} from 'bcrypt'
import {SignJWT} from 'jose'
import {serialize} from 'cookie'


const userLoginController = async(req,res) => {
    
    /*
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



    return res.send({jwt})
 
    */
    const {username, password} = req.body
    // Verificamos si existe el usuario
    const existingUserByUsername = await UserModel.findOne({username}).exec()
    // Verificamos username
    if(!existingUserByUsername) return res.status(401).send({message: 'Credenciales Incorrectas'})
    // Verificamos contraseña
    const checkPassword = await compare(password,existingUserByUsername.password)
    if(!checkPassword) return res.status(401).send({message : 'Credenciales Incorrectas'})

    // Generamos JWT (Identificador para que el usuario pueda obtener sus datos)
    const token = jwt.sign({
        exp: Math.floor(Date.now()/1000) + 60*60*24*1, // tiempo de caducidad
        id : existingUserByUsername._id,
        username : existingUserByUsername.username,
        name : existingUserByUsername.name,
        surname: existingUserByUsername.surname,
        email : existingUserByUsername.email,
        isAdmin : existingUserByUsername.isAdmin
    }, process.env.JWT_PRIVATE_KEY
    )

    const serialized = serialize('JWT', token,{
        httpOnly : true, // en produccion en el navegador no mostrara la cookie
        secure: process.env.NODE_ENV === 'development', // si estamos en produccion necesita SSL
        sameSite : 'strict',
        maxAge: 1000*60*60*24,
        path: '/' //ruta donde va a ser entregado
    }) // Serializamos el token (genera cookie)
    // Enviamos el token en la cabezera
    res.setHeader('Set-Cookie', serialized)
    return res.json('login succesfully!')

}

export default userLoginController