
//const express = require('express')
import express from 'express'
const router = express.Router()
import productController from '../controllers/product.js'
//const productController = require('../controllers/product')


router.post('/', productController.createProduct)

// Ruta para obtener todos los productos
router.get('/', productController.getProducts)

// Ruta para obtener un  producto por barcode
router.get('/:id', productController.getProductByBarcode)
// Ruta para eliminar un producto por su id
router.delete('/:id',productController.deleteProduct)
// Ruta para editar un producto por su id
router.post('/:id', productController.updateProduct)

export default router
//module.exports = router