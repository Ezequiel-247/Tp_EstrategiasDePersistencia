const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express")

const options = {
    definicion:{
        openapi: '3.0.0',
        info:{
            title : 'Red Anti-Social',
            version: '1.0.0',
            description: '',
            contact:{
                name: 'Developer'
            },
            servers:[{
                url:'localhost:3000',
                description: 'Local server'
            }]
        }

    },
    apis: ['./swagger/*.yml']
};

const specs = swaggerJSDoc(options);

const swaggerDocs = (app, port) =>{
    app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(specs));
}

module.exports = {swaggerDocs}