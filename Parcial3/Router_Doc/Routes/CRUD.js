const { query } = require('express');
const express = require('express')
var mySQL = require('mysql'); 
var router = express.Router()

var con = mySQL.createConnection({
    host     : "localhost",
    user     : "root",
    password : "123456",
    database : "l18100188"
});

con.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySQL esta conectado')
});

//Get (todos)
/**
  * @swagger
   * /get:
   *   get:
   *     description: Muestra a los estudiantes registrados en la BD
   *     responses:
   *       200:
   *         description: Consulta a la BD
   */
router.get('/', (req, res) => {
    let sql = 'SELECT * FROM registro';
    let query = con.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result)
    });
}); 

//Get (uno)
/**
  * @swagger
   * /geto:
   *   get:
   *     description: Muestra los datos de un estudiante en especifico.
   *     parameters:
   *       - NumControl: NumControl
   *         in: query
   *         description: 'Buscar por medio del Numero de Control al estudiante en especifico.'
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: Consulta a la BD
   */
router.get('/:NumControl', (req, res) => {
    let sql = `SELECT * FROM registro WHERE NumControl = ${req.params.NumControl}`;
    let query = con.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result)
    });
}); 

//Post
/**
  * @swagger
   * /post:
   *   post:
   *     description: Agregar estudiante a la BD.
   *     responses:
   *       200:
   *         description: Alta a la BD.
   */
router.post('/', (req, res) => {
    console.log(req.query);

    let params = {
        'NumControl': req.query.NumControl,
        'NombreEs': req.query.NombreEs,
        'ApellidoPa': req.query.ApellidoPa,
        'ApellidoMa': req.query.ApellidoMa
    }

    let sql = 'Insert into registro SET ?';
    let query = con.query(sql,params,(err,result)=>{
        if(err) throw err;
        res.send('Insert efectuado')
    });
}); 

//Put
/**
  * @swagger
   * /put:
   *   put:
   *     description: Actualiza los datos de un estudiante en especifico por medio del NumControl
   *     parameters:
   *       - NumControl: NumControl
   *         in: query
   *         description: 'Actualizar datos del estudiante por medio del NumControl'
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: Modifica datos a la BD
   */
router.put('/:NumControl', (req, res) => {
    console.log(req.query);

    let querys = {
        
        'NombreEs': req.query.NombreEs,
        'ApellidoPa': req.query.ApellidoPa,
        'ApellidoMa': req.query.ApellidoMa
    }

    let sql = `UPDATE registro SET ? WHERE NumControl = ${req.params.NumControl}`;

    let query = con.query(sql,querys,(err,result)=>{
        if(err) throw err;
        res.send('Update efectuado')
    });
}); 

//Delete
/**
  * @swagger
   * /delete:
   *   delete:
   *     description: Elimina a un estudiante de la BD
   *     parameters:
   *       - ID_Jugador: ID_Jugador
   *         in: query
   *         description: 'Elimina a un estudiante por medio del NumCotrol'
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: Baja a la BD
   */
router.delete('/:NumControl', (req, res) => {
    let sql = `DELETE FROM registro WHERE NumControl = ${req.params.NumControl}`;
    let query = con.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(`Eliminado correctamente todos los datos del NumControl: ${req.params.NumControl}`)
    });
}); 

module.exports.router = router;