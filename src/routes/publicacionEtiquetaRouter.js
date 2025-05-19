const {Router} = require('express')
const publicacionEtiquetaController = require('../controllers/publicacionEtiquetaController.js');
const router = Router()

router.get('/publicacion/:id', publicacionEtiquetaController.obtenerLasEtiquetasDeUnaPublicacion)
router.post('/', publicacionEtiquetaController.asignarEtiquetaAUnaPublicacion) //asigna un tag a un post - agregar validar si es necesario - 
router.delete('/', publicacionEtiquetaController.eliminarLaEtiquetaDeUnaPublicacion) //elimina un tag de un post

module.exports = router