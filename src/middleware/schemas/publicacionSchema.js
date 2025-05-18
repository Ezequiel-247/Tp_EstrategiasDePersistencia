const Joi = require('joi');

const publicacionSchema = Joi.object({
    descripcion: Joi.string().min(5).max(255).required(),
    fechaDePublicacion: Joi.date().iso().required()
});

module.exports = publicacionSchema