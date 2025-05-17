const { Etiqueta } = require('../db/models')

//aca los metodos get post put y delete
const crearEtiqueta = async (req, res) => {
    try {
      const etiqueta = await Etiqueta.create(req.body)
      res.status(201).json(etiqueta)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
}

const obtenerEtiquetas = async (req, res) => {
    try {
      const etiquetas = await Etiqueta.findAll()
      res.json(etiquetas)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
}

const eliminarEtiqueta = async (req, res) => {
    try {
      const etiqueta = await Etiqueta.findByPk(req.params.id);
      if (!etiqueta) return res.status(404).json({ error: 'etiqueta no encontrada' });
      await etiqueta.destroy();
      res.json({ mensaje: 'etiqueta eliminada' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}

const actualizarEtiqueta = async (req, res) => {
    try {
      const etiqueta = await Etiqueta.findByPk(req.params.id);
      if (!etiqueta) return res.status(404).json({ error: 'etiqueta no encontrada' });
      await etiqueta.update(req.body);
      res.json(etiqueta);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

module.exports = {
    crearEtiqueta,
    obtenerEtiquetas,
    eliminarEtiqueta,
    actualizarEtiqueta
}