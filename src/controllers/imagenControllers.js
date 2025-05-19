const { Imagen} = require("../db/models");

const obtenerImagenes = async(req,res)=>{
    try{
        const imagenes = await Imagen.findAll()
        res.json(imagenes)
    }
    catch(error){
        res.json({error: error.mesagge})
    }
};

const publicarImagen = async(req,res)=>{
    try{
        const imagen = await Imagen.create(req.body)
        res.status(201).json(imagen)
    } catch(error){
        res.status(400).json({ error: error.message })
    }
};

const actualizarImagen = async(req,res)=>{
   try {
      const { id } = req.params
      const imagen = await Imagen.findByPk(id);
      if (!imagen) return res.status(404).json({ error: 'imagen no encontrada' });
      await imagen.update(req.body);
      res.json(imagen);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};

const eliminarImagen = async (req,res) => {
    try{
        const {id} = req.params
        const imagen = await Imagen.findByPk(id)
        await imagen.destroy();
        res.json({ mensaje: 'imagen eliminada' });
    } catch(error){
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    obtenerImagenes, 
    publicarImagen, 
    eliminarImagen,
    actualizarImagen
};