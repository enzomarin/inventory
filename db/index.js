require('dotenv').config()
const mongoose = require('mongoose')


const PORT = process.env.PORT || 8080

const dbConnect = (app) => {
    mongoose.connect( // .connect retorna una promesa
        `mongodb+srv://enzom:${process.env.DB_MONGO_PASS}@develpment.qecsrsv.mongodb.net/stock-app?retryWrites=true&w=majority`)
        .then(result => {
            app.listen(PORT,() => {
                console.log(`Aplicacion escuchando en el puerto: ${PORT}`)
            })
            console.log("Conexion a BD exitosa")
        }) 
        .catch(err => console.log(err))
}

module.exports = dbConnect