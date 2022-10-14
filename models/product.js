import mongoose from 'mongoose'
//const mongoose = require('mongoose')

// Definimos el esquema de la base de datos



const productSchema = mongoose.Schema({
    barCode: {type: Number , required: true, unique: true},
    name: {type: String, required: true},
    description: String,
    costPrice: Number,
    price: Number,
    stock: Number,
    expirationDate: Date
    },
    {timestamps : true}// automaticamente se crean dos campos createdAt updatedAt
)

// creamos el modelo
const Product =mongoose.model('Product', productSchema, 'productsCollection') 
// si no le pasamos el nombre de la coleccion mongoose prularisa el nombre del modelo para crear la coleccion

export default Product
//module.exports = Product