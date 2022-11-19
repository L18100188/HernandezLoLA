const express = require('express')
const cors =  require('cors')
const { query } = require('express');
const ruta_crud = require('./CRUD')

const app = express();

app.use(cors({ origin:"*"}))
app.use(express.json())
app.use(express.text())

app.use('/get',ruta_crud.router);


app.listen(8092, ()=>{console.log('Servidor corriendo express')})