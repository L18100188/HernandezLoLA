const express = require('express')
const app = express()

app.get('/', (req,res) => {
    res.end('Servidor Express contestando 13/09/2022')
}) 

app.listen(8081, ()=>{console.log('Servidor corriendo express')})