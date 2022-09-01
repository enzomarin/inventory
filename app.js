
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

const app = express()

mongoose.connect( // .connect retorna una promesa
    `mongodb+srv://enzom:${process.env.DB_MONGO_PASS}@develpment.qecsrsv.mongodb.net/stock-app?retryWrites=true&w=majority`
    ).then(result => console.log("Conexion a BD exitosa")) 
    .catch(err => console.log(err))

// midleware 
app.use(express.static(path.join(__dirname,'public')))

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



const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`Aplicacion escuchando en el puerto ${PORT}`)
})