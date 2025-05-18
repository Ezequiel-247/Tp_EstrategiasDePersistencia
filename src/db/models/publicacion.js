'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Publicacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //Relacion con la tabla usuario
      this.belongsTo(models.Usuario,{
        foreignKey: "usuarioId",
        as: "usuario"
      });

      //Relacion con la tabla Comentario. --- corregido
      this.hasMany(models.Comentario,{
       // foreignKey: "idComentario",   -> lo mismo que abajo
        //as: "comentario"
        foreignKey: "publicacionId",
      });

      //corregido
      this.hasMany(models.Imagen,{ 
        //foreignKey: "idImagen",   -> es redundante usar la id de la imagen en la misma tabla
        //as: "Imagen"
        foreignKey: "publicacionId",
        as: "publicacion"
      });

      //Relacion con la tabla etiqueta N a N 
      this.belongsToMany(models.Etiqueta,{
        through: "PublicacionEtiqueta", // Nombre de la tabla intermedia
        foreignKey: "publicacionId",
        otherKey: "etiquetaId",
        as: "etiquetas"    
      })
    }
  }
  Publicacion.init({
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      notEmpty: true,      // No puede estar vacío
      len: [5, 255]        // Entre 5 y 255 caracteres, por ejemplo
      }
    },
    fechaDePublicacion: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
      isDate: true         // Verifica que sea una fecha válida
      }
    }
  }, {
    sequelize,
    modelName: 'Publicacion',
  });
  return Publicacion;
};