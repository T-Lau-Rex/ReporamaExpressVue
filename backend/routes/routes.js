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
router.get('/comic', showProductById)

 // Añadir un comic
router.post('/comic/add', createProduct)

 // Editar un comic
router.put('/comic/edit/:id', updateProduct)

 // Borrar un comic
router.delete('/comic/delete/:id', deleteProduct)


export default router