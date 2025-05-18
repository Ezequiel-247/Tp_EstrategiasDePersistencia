const Joi = require('joi');

//Chequear si falta algo
const comentarioSchema = Joi.object({
    contenido: Joi.string().min(1).max(500).required(),
    fechaDeComentario: Joi.date().iso().required()
});

module.exports = comentarioSchema;
