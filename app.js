

const express = require('express')

const app = express()

app.get('/', (req,res) =>{
    console.log('Peticion recibida!');
    res.status(200).send('<h1>Hola mundo</>')
})

app.listen(3000, () => {
    console.log('Aplicacion escuchando en el puerto 4000')
})