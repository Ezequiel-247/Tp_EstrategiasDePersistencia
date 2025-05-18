const express = require("express");
const app = express();
const db = require('./db/models') //base de datos
<<<<<<< HEAD
//revisar que funcione lo de abajo
const routers = require('./routes'); //rutas
app.use('/api', routers); //uso de las rutas

//app.use(express.json()) habilitar cuando este el middleware
=======
const publicacionRouter = require("./routes/publicacionRouter")
const usuarioRouter = require("./routes/usuarioRouter")
const etiquetaRouter = require("./routes/etiquetaRouter")
const comentarioRouter = require("./routes/comentarioRouter")
const imagenesRouter = require("./routes/imagenesRouter")
const publicacionEtiquetaRouter = require("./routes/publicacionEtiquetaRouter")

app.use(express.json()) // para que la api pueda leer json

app.use('/usuario', usuarioRouter); 
app.use('/publicacion',publicacionRouter);
app.use('/etiqueta', etiquetaRouter);
app.use('/comentario',comentarioRouter);
app.use('/imagen',imagenesRouter);
app.use('/publicacionEtiqueta',publicacionEtiquetaRouter)

>>>>>>> 3e45ad4d602f661ce44e294697d2920544b7a744

//configurar variable de entorno

const PORT = 3000;

app.listen(PORT, async ()=>{
    console.log(`Aplicación corriendo en el puerto: ${PORT}`)
<<<<<<< HEAD
    await db.sequelize.sync({force:true}) //sacar force true cuando terminemos de testear
=======
    await db.sequelize.sync({force:true}) //sacar force true cuando terminemos de testear 
    // despues la inicializacion del sequielize se agrega con lo de la ultima clase y se quita esta linea
>>>>>>> 3e45ad4d602f661ce44e294697d2920544b7a744
});