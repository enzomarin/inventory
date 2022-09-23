
const Product = require('../models/product')


const createProduct = (req,res) =>{
    // Comprobamos que el nombre venga en el body
    if(!req.body.name){
        res.status(400).json({
            ok: false,
            message: 'El campo Nombre es obligatorio!!'
        })
        return // terminamos la ejecucion
    }
    const newProduct = new Product({
        name: req.body.name,
        price: req.body.price
    })

    newProduct
        .save()
        .then(result =>{
            console.log({producto: result})
            res.status(201).json({ok:true, producto: result})
        })
        .catch(err => console.log(err))
    
    //console.log({body: req.body})
   
}


// obtenemos todos los productos
const getProducts = async (req,res) =>{
    const products = await Product.find().sort({_id:-1})

    res.status(200).json({ok: true, data: products })
}

module.exports = {createProduct, getProducts}