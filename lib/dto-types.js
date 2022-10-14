import { Type } from "@sinclair/typebox"



export const idDTOSchema =Type.String({
    format: 'uuid',
    errorMessage: {
        type: 'El tipo de _id no es valido, debe ser un string',
        format: 'El formato de _id no es valido, debe ser un uuid4'
    }
})
export const nameDTOSchema =Type.String({
    minLength: 2,
    maxLength: 20,
    errorMessage: {
        minLength: 'El nombre debe tener al menos 2 caracteres de longitud',
        maxLength: 'El nombre debe tener como maximo 20 caracteres de longitud'
    }
})
export const surnameDTOSchema = Type.String({
    minLength: 4,
    maxLength: 20,
    errorMessage: {
        minLength: 'El apellido debe tener al menos 4 caracteres de longitud',
        maxLength: 'El apellido debe tener como maximo 20 caracteres de longitud'
    }
})
export const usernameDTOSchema= Type.String({
    minLength: 4,
    maxLength: 20,
    errorMessage: {
        minLength: 'El nombre de usuario debe tener al menos 4 caracteres de longitud',
        maxLength: 'El nombre de usuario debe tener como maximo 20 caracteres de longitud'
    }
})
export const emailDTOSchema= Type.String({
    format: 'email',
    errorMessage: {
        type: 'El formato del email no es valido, debe ser un string',
        format: 'El formato de email no es valido, debe cumplir RFC 5322'
    }
})
export const passwordDTOSchema= Type.String({
    format: 'password',
    minLength: 5,
    maxLength: 20,
    errorMessage: {
        format: 'La contraseña debe tener, una mayuscula, una minuscula y un numero',
        minLength: 'La contraseña debe tener como minimo 5 caracteres de longitud',
        maxLength: 'La contraseña debe tener como maximo 20 caracteres de longitud'
    }
})