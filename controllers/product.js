
//const Product = require('../models/product')
import Product from '../models/product.js'

const createProduct = (req,res) =>{
    // Comprobamos que el nombre venga en el body
    if(!req.body.name){
        res.status(400).json({
            ok: false,
            message: 'El campo Nombre es obligatorio!!'
        })
        return // terminamos la ejecucion
    }
    // Comprobamos que venga bar code
    if(!req.body.barCode){
        res.status(400).json({
            ok:false,
            message:"El campo codigo de barra es obligatorio!!"
        })
        return
    }

    const newProduct = new Product({
        barCode: req.body.barCode,
        name: req.body.name,
        description: req.body.description,
        costPrice: req.body.costPrice,
        price: req.body.price,
        stock: req.body.stock,
        expirationDate: req.body.expirationDate
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

    res.status(200).json({ok: true, data: products, count: products.length})
}

const deleteProduct = async (req,res) =>{
    const id = req.params.id
    console.log(id);
    await Product.findByIdAndDelete(id)

    res.status(200).json({ok:true , message: "Producto eliminado"})
}

export default {createProduct,getProducts,deleteProduct}
//module.exports = {createProduct, getProducts, deleteProduct}