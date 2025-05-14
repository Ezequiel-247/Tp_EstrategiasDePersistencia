const Joi = require('joi');

//Chequear si falta algo
const imagenSchema = Joi.object({
    ruta: Joi.string().trim().uri().required(),
});

module.exports = imagenSchema;
