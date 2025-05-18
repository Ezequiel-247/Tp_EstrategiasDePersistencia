const {Router} = require('express')
const imagenController = require('../controllers/imagenControllers.js');
const publicacionController = require("../controllers/publicacionController.js")
const validarImagen = require('../middleware/validarImagen.js');
const router = Router()

router.get('/',imagenController.obtenerImagenes);
router.post('/:id', validarImagen ,imagenController.publicarImagen);
router.delete('/', imagenController.eliminarImagen);

//esto nose si va aca 
//router.delete('/posts/:id/images/:imagenId', imagenController.eliminarImagenDePublicacion);
//router.put('/posts/:id/images/:imagenId', imagenController.actualizarImagenDePublicacion);

module.exports = router