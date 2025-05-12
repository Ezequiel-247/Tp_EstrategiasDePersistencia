const Joi = require('joi')

const usuarioSchema = Joi.object({
    nombre: Joi.string().min(2).max(50).required(),
    //seguir completando
})

module.exports = usuarioSchema