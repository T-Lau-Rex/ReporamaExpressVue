import express from "express";
const router = express.Router()

import pool from "../config/database.js";

router.get('/', (req, res) => {
    res.send('hola mundo')
})

export default router