import express from 'express'
//const express = require('express')
import dotenv from 'dotenv'
//require('dotenv').config()
//const path = require('path')
//const axios = require('axios')
import cors from 'cors'
//const cors = require('cors')
import dbConnect from './db/index.js'
//const dbConnect = require('./db')
import Product from './models/product.js'
//const Product = require('./models/product')
import productRouter from './routes/products.js'
//const productRouter = require('./routes/products')
import userRouter from './routes/user.routes.js'
//const userRouter = require('./routes/user.routes')


const app = express()


//conexion a la base de datos
dbConnect(app)


app.use(cors())


//Middlewares
app.use(express.json())


// Routes
app.use('/api/v1/products', productRouter)
app.use('/user', userRouter)


