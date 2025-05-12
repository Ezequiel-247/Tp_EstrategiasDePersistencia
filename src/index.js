const express = require("express");
const app = express();
const db = require('./db/models') //base de datos
//revisar que funcione lo de abajo
const routers = require('./routes'); //rutas
app.use('/api', routers); //uso de las rutas

//app.use(express.json()) habilitar cuando este el middleware

//configurar variable de entorno

const PORT = 3000;

app.listen(PORT, async ()=>{
    console.log(`Aplicación corriendo en el puerto: ${PORT}`)
    await db.sequelize.sync({force:true}) //sacar force true cuando terminemos de testear
});