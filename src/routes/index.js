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