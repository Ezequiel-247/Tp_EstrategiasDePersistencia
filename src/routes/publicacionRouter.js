const {Router} = require('express')
const publicacionController = require('../controllers/publicacionController.js');
const validarPublicacion = require('../middleware/validarPublicacion.js');
const router = Router()

// Rutas para las publicaciones
router.get('/', publicacionController.obtenerPublicaciones)
router.get('/:id', publicacionController.obtenerPublicacion)
router.post('/', validarPublicacion, publicacionController.crearPublicacion)
router.delete('/:id', publicacionController.eliminarPublicacion)


module.exports = router