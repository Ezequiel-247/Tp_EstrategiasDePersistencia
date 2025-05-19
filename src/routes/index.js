const express = require("express");
const app = express();

const comentarioRouter = require('./comentarioRouter.js');
const publicacionRouter = require('./publicacionRouter.js');
const usuarioRouter = require('./usuarioRouter.js');
const publicacionEtiquetaRouter = require('./publicacionEtiquetaRouter.js');
const imagenesRouter = require('./imagenesRouter.js');
const etiquetaRouter = require('./etiquetaRouter.js');

app.use('/usuario', usuarioRouter);
app.use('/comentario', comentarioRouter);
app.use('/publicacion', publicacionRouter);
app.use('/publicacionEtiqueta', publicacionEtiquetaRouter);
app.use('/imagenes', imagenesRouter);
app.use('/etiqueta', etiquetaRouter);

module.exports = app