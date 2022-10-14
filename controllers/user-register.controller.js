
import UserModel from "../models/user.schema.js"
import {hash} from 'bcrypt'
const userRegisterController = async (req,res) => {
    const {_id, name, surname, username, email, password} = req.body

    const existingUserById = await UserModel.findById(_id).exec() // excec hace que retorne una promesa
    if(existingUserById) return res.status(409).send('Usuario ya registrado')

    const existingUserByUsername = await UserModel.findOne({username}).exec() // excec hace que retorne una promesa
    if(existingUserByUsername) return res.status(409).send('Username pertenece a  otro usuario')

    const existingUserByEmail = await UserModel.findOne({email}).exec() // excec hace que retorne una promesa
    if(existingUserByEmail) return res.status(409).send('Email ya registrado con otro usuario')


    const hashedPassword = await hash(password, 10)
    const user = new UserModel({
        _id,name,
        surname,
        username,
        email,
        password: hashedPassword
    })
    await user.save()

    return res.send({message: 'Usuario creado con exito!'})
}

export default userRegisterController