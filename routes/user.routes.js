//const express = require("express")
import express from 'express'

//const userRegisterDTO  = require("../dto/user-register.dto")
import userRegisterDTO from '../dto/user-register.dto.js'
import userLoginDTO from '../dto/user-login.dto.js'
//const userLoginDTO = require('../dto/user-login.dto')
import userRegisterController from '../controllers/user-register.controller.js'
import userLoginController from '../controllers/user-login.controller.js'
import userProfileController from '../controllers/user-profile.controller.js'
import userJWTDTO from '../dto/user-jwt.dto.js'
const userRouter = express.Router()


userRouter.post('/register', userRegisterDTO, userRegisterController)
userRouter.post('/login', userLoginDTO, userLoginController)
//userRouter.get('/profile',userJWTDTO, userProfileController) // Verificacion de JWT
userRouter.get('/profile', userProfileController)
/*
userRouter.patch('/update-data',userJWTDTO)
userRouter.patch('/update-email',userJWTDTO)
userRouter.patch('/update-password',userJWTDTO)
userRouter.delete('/unregister',userJWTDTO)

*/
export default userRouter
//module.exports = userRouter