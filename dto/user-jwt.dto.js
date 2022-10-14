
import {jwtVerify} from 'jose'

// next ya que es middleware
const userJWTDTO = async (req,res,next) => {
    // Obtenemos el jwt desde la cabecera
    const {authorization} = req.headers;

    if(!authorization) return res.status(401).send('Usuario no autorizado')

    const jwt = authorization.split(' ')[1]
    if(!jwt) return res.status(401).send({message: 'Usuario no autorizado'})
    try{
        const encoder = new TextEncoder()
        // payload contiene el identificador del usuario
        const {payload} = await jwtVerify(jwt, encoder.encode(process.env.JWT_PRIVATE_KEY))

        // Agregamos identificador del usuario a la cabecera
        req.id = payload.id
        next()
    }
    catch(error){
        res.status(401).send('Usuario no autorizado')
    }
}

export default userJWTDTO