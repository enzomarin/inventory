import { Type } from "@sinclair/typebox";  
import Ajv from "ajv";
import addFormats from 'ajv-formats';
import addErrors from 'ajv-errors';
import { passwordDTOSchema, usernameDTOSchema } from "../lib/dto-types.js";

const loginDTOSchema = Type.Object({

    username: usernameDTOSchema,
    password: passwordDTOSchema
})

const ajv = new Ajv({allErrors: true})

addFormats(ajv, ['email']).addKeyword('kind').addKeyword('modifier')
ajv.addFormat("password",/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/)
addErrors(ajv)

const validateSchema = ajv.compile(loginDTOSchema)

const userLoginDTO = (req,res, next) => {
    const isDOTValid = validateSchema(req.body)

    // Si algo ocurre mal enviamos el error
    if(!isDOTValid) return res.status(400).send({errors : validateSchema.errors.map(error => error.message)})
    //Si todo sale correcto
    next();
}

export default userLoginDTO