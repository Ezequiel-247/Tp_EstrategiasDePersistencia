const { Router } = require('express');
const usuarioController = require('../controllers/usuarioController');
const validarUsuario = require('../middleware/validarUsuario');
const router = Router()

// Rutas para los usuarios
router.get('/', usuarioController.obtenerUsuarios)
router.get('/:id', usuarioController.obtenerUsuario) //no lo pide la consigna
router.post('/', validarUsuario, usuarioController.crearUsuario)
router.put('/:id', validarUsuario, usuarioController.actualizarUsuario)
router.delete('/:id', usuarioController.eliminarUsuario)

module.exports = router