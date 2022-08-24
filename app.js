
require('dotenv').config()
const express = require('express')

const app = express()

app.get('/', (req,res) =>{
    console.log('Peticion recibida!');
    res.status(200).send('<h1>Hola mundo</>')
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`Aplicacion escuchando en el puerto ${PORT}`)
})