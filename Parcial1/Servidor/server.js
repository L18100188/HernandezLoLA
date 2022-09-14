const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors({ origin:"*"}))

app.get('/', (req,res) => {
    res.send('Servidor Express contestando a get desde el pto 8082')
}) 

app.post('/', (req,res) => {
    res.send('Servidor Express contestando a get desde el pto 8082')
}) 

app.listen(8082, ()=>{console.log('Servidor corriendo express desde 8082')})