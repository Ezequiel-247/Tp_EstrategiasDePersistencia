const { Publicacion, Imagen } = require('../db/models');

const obtenerPublicaciones = async (req, res) =>{
    try{
        const publicaciones = await Publicacion.findAll()
        res.json(publicaciones)
    }
    catch(error){
        res.status(500).json({error: error.message})
    }
}

const obtenerPublicacion = async (req, res) =>{
    const { id } = req.params
    try{
        const publicacion = await Publicacion.findByPk(id)
        if (!publicacion){
            return res.status(404).json({ error: 'Publicación no encontrada' });
        } 
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
        const { id } = req.params
        const publicacion = await Publicacion.findByPk(id);
        if (!publicacion){
            return res.status(404).json({ error: 'publicacion no encontrada' });
        }
        await publicacion.destroy();
        res.json({ mensaje: 'publicacion eliminada' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}



// Eliminar una imagen específica de una publicación
const eliminarImagenDePublicacion = async (req, res) => {
    const { id, imagenId } = req.params;
    try {
        const publicacion = await Publicacion.findByPk(id);
        if (!publicacion){
            return res.status(404).json({ error: 'Publicación no encontrada' });
        } 
        const imagen = await Imagen.findOne({ where: { id: imagenId, publicacionId: id } });

        if (!imagen){
            return res.status(404).json({ error: 'Imagen no encontrada para esta publicación' });
        } 
        await imagen.destroy();
        res.json({ mensaje: 'Imagen eliminada de la publicación' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Actualizar una imagen específica de una publicación
const actualizarImagenDePublicacion = async (req, res) => {
    const { id, imagenId } = req.params;
    try {
        const publicacion = await Publicacion.findByPk(id);
        if (!publicacion){
            return res.status(404).json({ error: 'Publicación no encontrada' });
        }

        const imagen = await Imagen.findOne({ where: { id: imagenId, publicacionId: id } });
        if (!imagen){
            return res.status(404).json({ error: 'Imagen no encontrada para esta publicación' });
        } 
        await imagen.update(req.body);
        res.json(imagen);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    obtenerPublicaciones,
    obtenerPublicacion,
    crearPublicacion,
    eliminarPublicacion,
    eliminarImagenDePublicacion, 
    actualizarImagenDePublicacion 
}