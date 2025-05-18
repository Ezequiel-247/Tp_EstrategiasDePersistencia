const Joi = require('joi')

const usuarioSchema = Joi.object({
    nombre: Joi.string().min(2).max(50).required(),
<<<<<<< HEAD
    //seguir completando
})

module.exports = usuarioSchema
=======
    email: Joi.string().email().min(2).max(50).required(),
    contraseña: Joi.string().min(6).max(20).required()
    //Completado falta chequear
});
module.exports = usuarioSchema;
>>>>>>> 3e45ad4d602f661ce44e294697d2920544b7a744
