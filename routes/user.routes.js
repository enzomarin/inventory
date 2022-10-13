const express = require("express")

const userRouter = express.Router()


userRouter.post('/register')
userRouter.post('/login')
userRouter.get('/profile')
userRouter.patch('/update-data')
userRouter.patch('/update-email')
userRouter.patch('/update-password')
userRouter.delete('/unregister')



module.exports = userRouter