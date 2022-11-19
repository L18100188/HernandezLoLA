const express = require('express')
const cors =  require('cors')
const ruta_crud = require('./Routes/CRUD')
const app = express();
const path=require('path')
const swaggerUI     = require('swagger-ui-express');
const swaggerJsDoc  = require('swagger-jsdoc');

const swaggerOptions = {definition:{
    openapi: '3.0.0',
     info: {title: 'API Estudiantes',
     version: '1.0.0',      
    },
    servers:[{url: "http://localhost:8093"}],  
    },
    apis: [`${path.join(__dirname,"./Routes/CRUD.js")}`],
  };

app.use(cors({ origin:"*"}))
app.use(express.json())
app.use(express.text())

app.use('/get',ruta_crud.router);
app.use('/geto/',ruta_crud.router);
app.use('/post',ruta_crud.router);
app.use('/put/',ruta_crud.router);
app.use('/delete/',ruta_crud.router);

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(swaggerDocs));


app.listen(8093, ()=>{console.log('Servidor corriendo express')})