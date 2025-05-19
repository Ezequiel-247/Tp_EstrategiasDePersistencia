'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Imagen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //Relacion con la tabla Publicacion.
      
      this.belongsTo(models.Publicacion,{
        foreignKey: "publicacionId",
        as: "imagenes"
      })
    }
  }
  Imagen.init({
    ruta: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        isUrl: true //Valida q el string tenga formato URL.
      }}
  }, {
    sequelize,
    modelName: 'Imagen',
    timestamps: false
  });
  return Imagen;
};