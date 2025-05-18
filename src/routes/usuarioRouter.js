const { Router } = require('express');
const usuarioController = require('../controllers/usuarioController');
const validarUsuario = require('../middleware/validarUsuario');
const router = Router()

//algunas validaciones agregadas
router.get('/', usuarioController.obtenerUsuarios);
router.get('/:id', usuarioController.obtenerUsuario);
router.post('/', validarUsuario, usuarioController.crearUsuario);
router.put('/:id', validarUsuario, usuarioController.actualizarUsuario);
router.delete('/:id', usuarioController.eliminarUsuario);

//router.get('/:id/publicacion', usuarioController.obtenerPublicacionDeUsuario);
//router.get('/:id/comentario', usuarioController.obtenerComentarioDeUsuario);

module.exports = router