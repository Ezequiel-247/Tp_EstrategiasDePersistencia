'use strict';
const { allow } = require('joi');
const {
  Model
} = require('sequelize');
const publicacion = require('./publicacion');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //Relacion con tabla publicacion 1:N
      this.hasMany(models.Publicacion,{
        foreignKey: "usuarioId",
        as: "publicaciones"
      });

      //Relacion con tabla comentario -> corregido
      this.hasMany(models.Comentario,{
        //foreignKey: "idComentario", ->>>>pone como clave foranea la pk de la misma tabla
        //as: "comentario"
        foreignKey: "usuarioId",
        as: "comentario"
      })
    }
  }
  Usuario.init({
    nombre: {
      type: DataTypes.STRING,            //Tiene q ser de tipo de dato string
      allowNull: false,                  //No se permite que sea 'null' (es obligatorio).
      validate: {                       
        notEmpty: true,                  //No puede ser una cadena vacía ("").
        len: [2,50]                      //Debe tener entre 2 y 50 caracteres
      }
    },
    email:{ 
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len:[2,50],
        isEmail: true                   // Verifica que tenga formato de correo electrónico válido
      }
    },
    contraseña: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len:[6,20]
      }
    },
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};