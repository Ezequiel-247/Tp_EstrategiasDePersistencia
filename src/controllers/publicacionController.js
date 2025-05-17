const { Publicacion } = require('../db/models');

const obtenerPublicaciones = async (req, res) =>{
    try{
        const publicaciones = await Publicacion.findAll()
        res.json(publicaciones)
    }
    catch(error){
        res.json({error: error.mesagge})
    }
}

const obtenerPublicacion = async (req, res) =>{
    const idPublicacion = req.params.id
    try{
        const publicacion = await Publicacion.findByPk(idPublicacion)
        res.json(publicacion)
    }
    catch(error){
        res.status(500).json({error: error.message})
    }
}

const crearPublicacion = async (req, res) =>{
    try{
        const publicacion = await Publicacion.create(req.body)
        res.status(201).json(publicacion)
    }
    catch(error){
        res.status(500).json({error: error.message})
    }
}

const eliminarPublicacion = async (req, res) => {
    try {
        const publicacion = await Publicacion.findByPk(req.params.id);
        if (!publicacion) return res.status(404).json({ error: 'publicacion no encontrada' });
        await publicacion.destroy();
        res.json({ mensaje: 'publicacion eliminada' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    obtenerPublicaciones,
    obtenerPublicacion,
    crearPublicacion,
    eliminarPublicacion,
    /*eliminarUnaImagenDeLaPublicacion, /posts/{id}/images/{imageId}
    actualizarImagenesDeUnaPublicacion /posts/{id}/images/{imageId} */
}