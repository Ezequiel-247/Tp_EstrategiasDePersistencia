const { Publicacion } = require('../db/models');

//aca los metodos get post put y delete
const crearPublicacionEtiqueta = async (req, res) => {
    try {
      const publicacion = await Publicacion.findByPk(req.body.publicacionId);
      if (!publicacion) return res.status(404).json({ error: 'publicacion no encontrada' });
      const etiqueta = await publicacion.getEtiquetas({ where: { id: req.body.etiquetaId } });
      if (etiqueta.length) return res.status(400).json({ error: 'la etiqueta ya existe en la publicacion' });
      await publicacion.addEtiqueta(req.body.etiquetaId);
      res.status(201).json("Etiqueta agregada a la publicacion");
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
}

/*const obtenerPublicacionesEtiquetas = async (req, res) => {   fijarse como hacer /post-tags/post/{postId}
    try {
      const relaciones = await PublicacionEtiqueta.findAll()
      res.json(relaciones)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
}*/

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
    //obtenerPublicacionesEtiquetas,
    eliminarPublicacionEtiqueta
}