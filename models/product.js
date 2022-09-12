
const mongoose = require('mongoose')

// Definimos el esquema de la base de datos



const productSchema = mongoose.Schema({
    name: {type: String, required: true},
    price: Number
    },
    {timestamps : true}// automaticamente se crean dos campos createdAt updatedAt
)

// creamos el modelo
const Product =mongoose.model('Product', productSchema)

module.exports = Product