// importar las funciones de product model
import {
    getProducts,
    getProductById,
    insertProduct,
    deleteProductById,
    updateProductById
} from '../models/productoModel.js'

// obtener todos los comics
export const showProducts = (req, res) => {
    getProducts((err, results) => {
        if(err) {
            res.send(err)
        } else {
            res.json(results)
        }
    })
}

// obtener un comics
export const showProductById = (req, res) => {
    getProductById (req.params.id, (err, results) => {
        if(err) {
            res.send(err)
        } else {
            res.json(results)
        }
    })
}

// Añadir un comics
export const createProduct = (req, res) => {
    const data = req.body
    insertProduct(data, (err, results) => {
        if(err) {
            res.send(err)
        } else {
            res.json(results)
        }
    })
}

// Eliminar un comics

export const deleteProduct = (req, res) => {
    const id = req.params.id
    deleteProductById(id, (err, results) => {
        if(err) {
            res.send(err)
        } else {
            res.json(results)
        }
    })
}

// Editar un comics

export const updateProduct = (req, res) => {
    const data = req.body
    const id = req.params.id
    updateProductById(data, id, (err, results) => {
        if(err) {
            res.send(err)
        } else {
            res.json(results)
        }
    })
}