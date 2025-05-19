import swaggerJSDoc from "swagger-jsdoc";

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
    apis: ('./swagger/*.yml')
};

const specs = swaggerJSDoc(options);

export default specs;