
const express = require('express')
const router = express.Router()
const productController = require('../controllers/product')


router.post('/', productController.createProduct)

// Ruta para obtener todos los productos
router.get('/', productController.getProducts)
// Ruta para eliminar un producto por su id
router.delete('/:id',productController.deleteProduct)

module.exports = router