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

export default specs;