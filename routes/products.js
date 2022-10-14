
//const express = require('express')
import express from 'express'
const router = express.Router()
import productController from '../controllers/product.js'
//const productController = require('../controllers/product')


router.post('/', productController.createProduct)

// Ruta para obtener todos los productos
router.get('/', productController.getProducts)
// Ruta para eliminar un producto por su id
router.delete('/:id',productController.deleteProduct)

export default router
//module.exports = router