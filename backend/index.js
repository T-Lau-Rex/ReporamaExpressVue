


/// IMPORTACIONES
import express from "express";
import morgan from "morgan";
import path from "path"
import cors from "cors";
import router from './routes/routes.js'
 
// INICIALIZACIONES
 
const app = express();
 
// SETTINGS
 
const port = process.env.PORT || 3000;
 
// MIDDLEWARES
 
app.use(morgan('dev'));
app.use(express.json())
app.use(cors())
 
// VARIABLES GLOBALES
 
// app.use((req, res, next) => { next();});
 
// RUTAS

app.use(router)
 
// app.use(require('./routes'))
// app.use(require('./routes/authentication'))
// app.use('/links', require('./routes/links'))
 
// ARCHIVOS PÚBLICOS
 
// app.use(express.static(path.join(__dirname, 'public')));
 
// ERROR 404
 
// EMPEZAR SERVIDOR
 
app.listen(port, () => { 
    console.log(`Servidor en puerto ${port}\nhttp://localhost:${port}`)
});