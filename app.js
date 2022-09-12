
require('dotenv').config()
//const path = require('path')
//const axios = require('axios')
const express = require('express')
const cors = require('cors')
const dbConnect = require('./db')
const Product = require('./models/product')
const productRouter = require('./routes/products')


const app = express()
app.use(cors())

//conexion a la base de datos
dbConnect(app)




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

// midleware 
//app.use(express.static(path.join(__dirname,'public')))


