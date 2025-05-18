const {Router} = require('express')
const publicacionEtiquetaController = require('../controllers/publicacionEtiquetaController.js');
//const validarPublicacion = require('../middleware/validarPublicacion'); fijarse si hay que hacer validador
const router = Router()

// Rutas para los tags de las publicaciones
//router.get('/', publicacionEtiquetaController.obtenerPublicacionesEtiquetas) //completar-- obtiene todos los tag de un post
router.get('/etiquetas/:id/publicaciones', publicacionEtiquetaController.obtenerPublicacionesEtiquetas)
router.post('/', publicacionEtiquetaController.crearPublicacionEtiqueta) //asigna un tag a un post - agregar validar si es necesario - 
router.delete('/', publicacionEtiquetaController.eliminarPublicacionEtiqueta) //elimina un tag de un post

module.exports = router