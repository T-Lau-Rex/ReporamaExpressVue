// importar la conexión 
import pool from '../config/database.js'

// mostar todos los comics
export const getProducts=(result) => {
    pool.query("SELECT * from comics", (err, results)=> {
        if(err){
            console.log(err)
            result(err, null)
        } else {
            result(null, results)
        }
    })
} 

// mostar un comic

export const getProductById=(id, result) => {
    pool.query("SELECT * FROM comics WHERE id = ?", [id], (err, results) => {
        if(err){
            console.log(err)
            result(err, null)
        } else {
            result(null, results[0])
        }
    })
}
// insertar un comic

export const insertProduct=(data, result) => {
    pool.query("INSER INTO comics SET?"), [data], (err, results) => {
        if(err){
            console.log(err)
            result(err, null)
        } else {
            result(null, results[0])
        }
    }
}

// Eliminar un comics

export const deleteProductById = (id, result) => {
    pool.query("DELETE FROM comics WHERE id = ?", [id], (err, results) => {
        if(err){
            console.log(err)
            result(err, null)
        } else {
            result(null, results)
        }
    })
}

// Editar un comics

export const updateProductById = (data, result) => {
    pool.query("UPDATE comics SET ? WHERE id = ?", [data.titulo, data.volumen, data.id_categoria, data.id_editorial, data.estado], (err, results) => {
        if(err){
            console.log(err)
            result(err, null)
        } else {
            result(null, results)
        }
    })
}