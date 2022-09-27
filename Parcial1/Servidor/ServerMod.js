const express = require('express')
const cors = require('cors')
const cadenas = require('./modulos')

const app = express()
app.use(cors({ origin:"http://localhost"}))

app.use(express.text())
app.use(express.json())

app.get('/', (req,res) => {
    //res.send('Servidor Express contestando a get desde el pto 8082')
    res.sendFile('./static/html/index.html', {root: __dirname},(err)=>{console.log('Archivo enviado')})
}) 

app.post('/texto', (req,res) => {
   // res.send('Servidor Express contestando a get desde el pto 8082')
   //console.log(req.body)
   //let may = req.body.toUpperCase()
   //let sinesp = req.body.trim()
   //let longi = req.body.length

   let may = cadenas.pasarMayusculas(req.body);
   let sinesp = cadenas.quitarEspacios(req.body);
   let longi = cadenas.obtenerLongitud(req.body);

   res.json({
    mayusculas: may,
    sinespacios: sinesp,
    longitud: longi
   })
}) 

app.post('/json', (req,res) => {
    // res.send('Servidor Express contestando a get desde el pto 8082')
    console.log(req.body.nombre)
    let cadena = "Hola " + req.body.nombre+ " " + req.body.apellido + " como estas?"
    res.json({saludo:cadena})
    
}) 

app.get('/mayusculas/:cadena', (req,res) => {
    console.log(req.params)
    res.send(req.params)
}) 

app.get('/suma', (req,res) => {
    console.log(req.query)
    let suma = parseInt(req.query.x)+parseInt(req.query.y)
    res.send(`La suma es ${suma}`)
}) 



app.use('/', (req,res) => {
    // res.send('Servidor Express contestando a get desde el pto 8082')
    res.status(404).sendFile('./static/html/404.html', {root: __dirname})
 }) 

app.listen(8085, ()=>{
    console.log('Servidor corriendo express desde 8082')
    console.log(__dirname)
    console.log(__filename)
})