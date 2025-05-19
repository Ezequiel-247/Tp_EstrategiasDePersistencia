const express = require("express");
const app = express();
const db = require('./db/models') //base de datos
const router = require("./routes/index")

app.use(express.json()) // para que la api pueda leer json

app.use('/api', router); 


//configurar variable de entorno

const PORT = 3000;

app.listen(PORT, async ()=>{
    console.log(`Aplicación corriendo en el puerto: ${PORT}`)
    await db.sequelize.sync({force:true}) //sacar force true cuando terminemos de testear 
    // despues la inicializacion del sequielize se agrega con lo de la ultima clase y se quita esta linea
});