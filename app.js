
const express = require('express')
require('dotenv').config()
//const path = require('path')
//const axios = require('axios')
const cors = require('cors')
const dbConnect = require('./db')
const Product = require('./models/product')
const productRouter = require('./routes/products')
const userRouter = require('./routes/user.routes')


const app = express()


//conexion a la base de datos
dbConnect(app)


app.use(cors())

//Middlewares
app.use(express.json())


// Routes
app.use('/api/v1/products', productRouter)
app.use('/user', userRouter)


