import express from "express";
const router = express.Router()
import {
    showProducts,
    showProductById,
    createProduct,
    updateProduct,
    deleteProduct
} from '../controllers/product.js'

 // Obtener todos los comics
router.get('/comic', showProducts)

 // Obtener un comic
router.get('/comic/:id', showProductById)

 // Añadir un comic
router.post('/comic/agregar', createProduct)

 // Editar un comic
router.put('/comic/:id', updateProduct)

 // Borrar un comic
router.delete('/comic/borrar/:id', deleteProduct)


export default router