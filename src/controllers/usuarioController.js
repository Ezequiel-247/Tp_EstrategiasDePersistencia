const { Usuario } = require('../db/models')

//aca los metodos get post put y delete
const crearUsuario = async (req, res) => {
    try {
      const usuario = await Usuario.create(req.body)
      res.status(201).json(usuario)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
}

const obtenerUsuarios = async (req, res) => {
    try {
      const usuarios = await Usuario.findAll()
      res.json(usuarios)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
}

const obtenerUsuario = async (req, res) => {
    const idUsuario = req.params.id
    try {
      const usuarios = await Usuario.findByPk(idLibro);
      res.json(libros);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}

const eliminarUsuario = async (req, res) => {
    try {
      const usuario = await Usuario.findByPk(req.params.id);
      if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });
      await usuario.destroy();
      res.json({ mensaje: 'usuario eliminado' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}

const actualizarUsuario = async (req, res) => {
    try {
      const usuario = await Usuario.findByPk(req.params.id);
      if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });
      await usuario.update(req.body);
      res.json(usuario);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
module.exports = {
    obtenerUsuarios,
    obtenerUsuario,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario 
}