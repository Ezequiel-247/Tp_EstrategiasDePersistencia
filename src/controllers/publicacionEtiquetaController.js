const { Publicacion, Etiqueta } = require('../db/models');


//aca los metodos get post put y delete
const crearPublicacionEtiqueta = async (req, res) => {
    try {
      const publicacion = await Publicacion.findByPk(req.body.publicacionId);
      const etiqueta = await publicacion.getEtiquetas({ where: { id: req.body.etiquetaId } });
      if (!publicacion){ 
        return res.status(404).json({ error: 'publicacion no encontrada' });
      }
      if (etiqueta.length){
        return res.status(400).json({ error: 'la etiqueta ya existe en la publicacion' });
      }
      await publicacion.addEtiqueta(req.body.etiquetaId);
      res.status(201).json("Etiqueta agregada a la publicacion");
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
}

const obtenerPublicacionesEtiquetas = async (req, res) => {   
    try {
      const { id } = req.params
       const publicacion = await Publicacion.findOne({
      where: { id },
      include: {
        model: Etiqueta,
        as: "etiquetas",  
        through: { attributes: [] } 
      }
    });
      if (!publicacion){
        return res.status(404).json({ mensaje: 'publicacion no encontrada' });
      }
      res.json(publicacion.etiquetas)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
}

const eliminarPublicacionEtiqueta = async (req, res) => {
    try {
      const publicacion = await Publicacion.findByPk(req.body.publicacionId);
      if (!publicacion) return res.status(404).json({ error: 'publicacion no encontrada' });
      const etiqueta = await publicacion.getEtiquetas({ where: { id: req.body.etiquetaId } });
      if (!etiqueta.length) return res.status(404).json({ error: 'etiqueta no encontrada' });
      await publicacion.removeEtiqueta(req.body.etiquetaId);
      res.json({ mensaje: 'etiqueta eliminada de la publicacion'});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}


module.exports = {
    crearPublicacionEtiqueta,
    obtenerPublicacionesEtiquetas,
    eliminarPublicacionEtiqueta
}