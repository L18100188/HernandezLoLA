const express = require('express')
var mySQL = require('mysql'); 
const app = express()

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

app.get('/get', (req, res) => {
    let sql = 'SELECT * FROM registro';
    let query = con.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
}) 

app.get('/get/:NumControl', (req, res) => {
    let sql = `SELECT * FROM registro WHERE NumControl = ${req.params.NumControl}`;
    let query = con.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
}) 

app.listen(8089, ()=>{console.log('Servidor corriendo express')})