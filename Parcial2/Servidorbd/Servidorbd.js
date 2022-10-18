const express = require('express')
const app = express()
var mySQL = require('mysql'); 


var con = mySQL.createConnection({
    host     : "localhost",
    user     : "root",
    password : "123456",
    database : "l18100188"
});

con.connect();

app.get('/test/:id', async (req,res) => {
    const DataId = req.params.id;
    console.log(DataId)
    const [responseDB] = await con.query(`SELECT * FROM registro WHERE NControl = ${DataId}`);
    res.json(responseDB)
}) 

app.listen(8081, ()=>{console.log('Servidor corriendo express')})