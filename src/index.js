const express = require("express");
const app = express();
const db = require('./db/models') //base de datos
//revisar que funcione lo de abajo
const routerUsuario = require('./routes/usuarioRouter.js'); //usuario router
const routerPublicacion = require('./routes/publicacionRouter.js'); //publicacion router
const routerComentario = require('./routes/comentarioRouter.js'); //comentario router
const routerEtiqueta = require('./routes/etiquetaRouter.js'); //etiqueta router
const routerPublicacionEtiqueta = require('./routes/publicacionEtiquetaRouter.js'); //tag de publicacion router


app.use(express.json()) // para que la api pueda leer json

//pasarlo a un router unico
app.use('/usuario', routerUsuario); //uso de las rutas usuario
app.use('/publicacion', routerPublicacion); //uso de las rutas usuario
app.use('/comentario', routerComentario); //uso de las rutas comentario
app.use('/etiqueta', routerEtiqueta); //uso de las rutas etiqueta
app.use('/publicacionEtiqueta', routerPublicacionEtiqueta); //uso de las rutas publicacion etiqueta



//configurar variable de entorno

const PORT = 3000;

app.listen(PORT, async ()=>{
    console.log(`Aplicación corriendo en el puerto: ${PORT}`)
    await db.sequelize.sync({force:true}) //sacar force true cuando terminemos de testear 
    // despues la inicializacion del sequielize se agrega con lo de la ultima clase y se quita esta linea
});