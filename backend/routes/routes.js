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
router.get('/comics', showProducts)

 // Obtener un comic
router.get('/comics', showProductById)

 // Añadir un comic
router.post('/comics/add', createProduct)

 // Editar un comic
router.put('/comics/edit/:id', updateProduct)

 // Borrar un comic
router.delete('/comics/delete/:id', deleteProduct)


export default router