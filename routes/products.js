
const express = require('express')
const router = express.Router()
const productController = require('../controllers/product')


router.post('/', productController.createProduct)

// Ruta para obtener todos los productos
router.get('/', productController.getProducts)
module.exports = router