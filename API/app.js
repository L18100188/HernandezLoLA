const express = require('express')
const app = express()
const {query}= require('express')
const cors = require('cors')
const ruta_estudiantes = require('./routes/crud')
const path=require('path')


const swaggerUI     = require('swagger-ui-express');
const swaggerJsDoc  = require('swagger-jsdoc');

const swaggerOptions = {definition:{
    openapi: '3.0.0',
     info: {title: 'API Estudiantes',
     version: '1.0.0',      
    },
    servers:[{url: "http://localhost:8081"}],  
    },
    apis: [`${path.join(__dirname,"./routes/crud.js")}`],
  };


app.use(express.json())
app.use(express.text())
app.use(cors({ origin:"*"}))

app.use('/MostrarEstudiantes',ruta_estudiantes.router);
app.use('/MostrarEstudiante/',ruta_estudiantes.router);
app.use('/AgregarEstudiante',ruta_estudiantes.router);
app.use('/ActualizarEstudiante/',ruta_estudiantes.router);
app.use('/EliminarEstudiante/',ruta_estudiantes.router);

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(swaggerDocs));


app.listen(8081, ()=>{console.log('Servidor corriendo express')})