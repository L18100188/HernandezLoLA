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
router.get('/', (req, res) => {
    let sql = 'SELECT * FROM registro';
    let query = con.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result)
    });
}); 

//Get (uno)
router.get('/:NumControl', (req, res) => {
    let sql = `SELECT * FROM registro WHERE NumControl = ${req.params.NumControl}`;
    let query = con.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result)
    });
}); 

//Post
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
router.delete('/:NumControl', (req, res) => {
    let sql = `DELETE FROM registro WHERE NumControl = ${req.params.NumControl}`;
    let query = con.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(`Eliminado correctamente todos los datos del NumControl: ${req.params.NumControl}`)
    });
}); 

module.exports.router = router;