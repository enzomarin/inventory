
import { Type } from "@sinclair/typebox";
import Ajv from "ajv";
import addFormats from 'ajv-formats';
import addErrors from 'ajv-errors';
import { emailDTOSchema, idDTOSchema, nameDTOSchema, passwordDTOSchema, surnameDTOSchema, usernameDTOSchema } from "../lib/dto-types.js";


const RegisterDTOSchema = Type.Object({

    _id: idDTOSchema,
    name: nameDTOSchema ,
    surname: surnameDTOSchema,
    username: usernameDTOSchema,
    email: emailDTOSchema,
    password: passwordDTOSchema
})

const ajv = new Ajv({allErrors: true})

addFormats(ajv, ['email', 'uuid']).addKeyword('kind').addKeyword('modifier')
ajv.addFormat("password",/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/)
addErrors(ajv)

const validateSchema = ajv.compile(RegisterDTOSchema)

const userRegisterDTO = (req,res, next) => {
    const isDOTValid = validateSchema(req.body)

    // Si algo ocurre mal enviamos el error
    if(!isDOTValid) return res.status(400).send({errors : validateSchema.errors.map(error => error.message)})
    //Si todo sale correcto
    next();
}

export default userRegisterDTO