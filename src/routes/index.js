<<<<<<< HEAD
const {Router} = require('express');
const router = Router();

//este archivo es para un router general, que a la vez contiene a los demas.


// Agrega los routers aca 
// por ejemplo -> const publicacionRoutes = require('./publicacionesRoutes');
const usuarioRouter = require('./usuarioRouter');

//agregar el uso de los routers
//por ejemplo -> router.use('/publicacion', publicacionRoutes);
router.use('/usuario', usuarioRouter);

module.exports = router;
=======
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
>>>>>>> 6ab27720a598922873af2408ad93f3ef4fd4a214
