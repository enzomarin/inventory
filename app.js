
const express = require('express')
require('dotenv').config()
//const path = require('path')
//const axios = require('axios')
const cors = require('cors')
const dbConnect = require('./db')
const Product = require('./models/product')
const productRouter = require('./routes/products')


const app = express()


//conexion a la base de datos
dbConnect(app)


app.use(cors())

app.use(express.json())

app.use('/api/v1/products', productRouter)
/*
app.get('/', (req, res, next) =>{
    const pokeApiBaseUrl = 'https://pokeapi.co/api/v2/pokemon'

    axios(`${pokeApiBaseUrl}/charmander`).then( (res) =>{
        const pokemon = res.data
        console.log({pokemon})
    })

    next()
})
*/
app.get('/', (res,req) => {
    console.log('peticion recibida!!!!')
    res.status(200).json({ok:true})
})
// midleware 
//app.use(express.static(path.join(__dirname,'public')))


