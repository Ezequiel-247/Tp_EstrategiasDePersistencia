const {Router} = require('express')

const imagenController = require('../controllers/imagenControllers.js');
const validarImagen = require('../middleware/validarImagen.js');
const router = Router()

router.get('/',imagenController.obtenerImagenes);
router.post('/', validarImagen, imagenController.publicarImagen);
router.put('/:id', validarImagen, imagenController.actualizarImagen);
router.delete('/', imagenController.eliminarImagen);

module.exports = router