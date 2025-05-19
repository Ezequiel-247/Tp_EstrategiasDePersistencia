const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

var options = {
    swaggerOptions : { 
        url : "/api-docs/swagger.json" , 
    } , 
}

app.get("/api-docs/swagger.json", (req, res) => res.json(swaggerDocument));
app.use('/api-docs', function(req, res, next){
    swaggerDocument.host = req.get('host');
    req.swaggerDoc = swaggerDocument;
    next();
}, swaggerUi.serveFiles(swaggerDocument, options), swaggerUi.setup());