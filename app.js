
require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')
const app = express()
//const axios = require('axios')

app.use(cors())

mongoose.connect( // .connect retorna una promesa
    `mongodb+srv://enzom:${process.env.DB_MONGO_PASS}@develpment.qecsrsv.mongodb.net/stock-app?retryWrites=true&w=majority`
    ).then(result => console.log("Conexion a BD exitosa")) 
    .catch(err => console.log(err))


// Definimos el esquema de la base de datos
const productSchema = mongoose.Schema({
    name: {type: String, required: true},
    price: Number
},
{timestamps : true}// automaticamente se crean dos campos createdAt updatedAt
)

// modelo
const Product =mongoose.model('Product', productSchema)



app.use(express.json())

app.post('/api/v1/products', (req,res) =>{

    const newProduct = new Product({
        name: req.body.name,
        price: req.body.price
    })

    newProduct
        .save()
        .then(result =>{
            res.status(201).json({ok:true})
        })
        .catch(err => console.log(err))
    
    //console.log({body: req.body})
   
})
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


const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`Aplicacion escuchando en el puerto ${PORT}`)
})