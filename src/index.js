
const express = require("express");
const app = express();
const db = require('./db/models') //base de datos
const fs = require("fs")
const YAML = require('yaml')

const file  = fs.readFileSync('./src/swagger.yaml', 'utf8')
const swaggerDocument = YAML.parse(file)


const publicacionRouter = require("./routes/publicacionRouter")
const usuarioRouter = require("./routes/usuarioRouter")
const etiquetaRouter = require("./routes/etiquetaRouter")
const comentarioRouter = require("./routes/comentarioRouter")
const imagenesRouter = require("./routes/imagenesRouter")
const publicacionEtiquetaRouter = require("./routes/publicacionEtiquetaRouter")

app.use(express.json()) // para que la api pueda leer json
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/usuario', usuarioRouter); 
app.use('/publicacion',publicacionRouter);
app.use('/etiqueta', etiquetaRouter);
app.use('/comentario',comentarioRouter);
app.use('/imagen',imagenesRouter);
app.use('/publicacionEtiqueta',publicacionEtiquetaRouter)


//configurar variable de entorno

const PORT = 3000;

app.listen(PORT, async ()=>{
    console.log(`Aplicación corriendo en el puerto: ${PORT}`)
    await db.sequelize.sync({force:true});//sacar force true cuando terminemos de testear 
    // despues la inicializacion del sequielize se agrega con lo de la ultima clase y se quita esta linea
    swaggerDocs(app,PORT);
});

