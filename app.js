
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const path = require('path')

mongoose.connect( // .connect retorna una promesa
    `mongodb+srv://enzom:${process.env.DB_MONGO_PASS}@develpment.qecsrsv.mongodb.net/?retryWrites=true&w=majority`
    ).then(result => console.log("Conexion a BD exitosa")) 
    .catch(err => console.log(err))

// midleware 
app.use(express.static(path.join(__dirname,'public')))


/*
app.get('/', (req,res) =>{
    console.log('Peticion recibida!');
    res.status(200).send('<h1>Hola mundo</>')
})
*/


const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`Aplicacion escuchando en el puerto ${PORT}`)
})