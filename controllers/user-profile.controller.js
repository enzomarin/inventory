import UserModel from "../models/user.schema.js";



const userProfileController = async (req,res) =>{
    const {id} = req;

    const existingUserById = await UserModel.findById(id).exec()

    if(!existingUserById){ // Si no existe quiere decir que el token es valido 
        //pero el usuario ya no esta logeado pero 
        return res.status(401).send({message: 'Usuario no autorizado'})
    }

    const {_id, name, surname, username, email}= existingUserById

    return res.send({_id, name, surname, username, email})
}
export default userProfileController