const express = require('express')
let mySQL = require('mysql'); 
var router = express.Router()

let con = mySQL.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'l18100188'
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
   * /MostrarEstudiantes:
   *   get:
   *     description: Muestra a los estudiantes registrados en la BD
   *     responses:
   *       200:
   *         description: Estudiantes consultados
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
   * /MostrarEstudiante/{NumControl}:
   *   get:
   *     description: Muestra los datos de un estudiante en especifico.
   *     parameters:
   *       - name: NumControl
   *         in: path
   *         description: 'Buscar por medio del Numero de Control al estudiante en especifico.'
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Estudiante consultado
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
   * /AgregarEstudiante:
   *   post:
   *     description: Agregar estudiantes a la BD.
   *     parameters:
   *        - name: NumControl
   *         in: query
   *         description: 'Agrega el NumControl del estudiante'
   *         schema:
   *           type: integer
   *       - name: NombreEs
   *         in: query
   *         description: 'Agrega el nombre del estudiante'
   *         schema:
   *           type: string
   *       - name: ApellidoPa
   *         in: query
   *         description: 'Agrega el apellido paterno del estudiante'
   *         schema:
   *           type: string
   *       - name: ApellidoMa
   *         in: query
   *         description: 'Agrega el apellido materno del estudiante'
   *         schema:
   *           type: string 
   *     responses:
   *       200:
   *         description:   Estudiante agregado correctamente .
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
   * /ActualizarEstudiante/{NumControl}:
   *   put:
   *     description: Actualiza los datos del estudiante por medio del NumControl.
   *     parameters:
   *       - name: NumControl
   *         in: path
   *         description: 'Se toma el NumControl para indentificar al estudiante'
   *         schema:
   *           type: integer
   *       - name: NombreEs
   *         in: query
   *         description: 'Actualiza el nombre del Estudiante'
   *         schema:
   *           type: string
   *       - name: ApellidoPa
   *         in: query
   *         description: 'Actualiza el apellido Paterno del estudiante'
   *         schema:
   *           type: string
   *       - name: ApellidoMa
   *         in: query
   *         description: 'Actualiza el apellido Materno del estudiante'
   *         schema:
   *           type: float
   *     responses:
   *       200:
   *         description: Estudiante modificado correctamente
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
   * /EliminarEstudiante/{NumControl}:
   *   delete:
   *     description: Elimina los datos del estudiante por medio del NumControl
   *     parameters:
   *       - name: NumControl
   *         in: path
   *         description: 'Elimina los datos del estudiante'
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Estudiante eliminado
   */
router.delete('/:NumControl', (req, res) => {
    let sql = `DELETE FROM registro WHERE NumControl = ${req.params.NumControl}`;
    let query = con.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(`Eliminado correctamente todos los datos del NumControl: ${req.params.NumControl}`)
    });
}); 

module.exports.router = router;