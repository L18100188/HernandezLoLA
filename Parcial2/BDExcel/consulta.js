var mySQL = require('mysql'); 
let fs = require('fs');
let json2xls = require('json2xls');

var con = mySQL.createConnection({
    host     : "localhost",
    user     : "root",
    password : "123456",
    database : "l18100188"
});

con.connect();

con.query('SELECT * FROM registro', function(error, results, fields){
    if(error) throw error;
    //console.log(results)
    var xls = json2xls(results);
    fs.writeFileSync(`${__dirname}/data.xlsx`, xls, 'binary');
});

//con.query("SELECT * FROM registro WHERE NumControl = ?",['1'], function(error, results, fields){
//    console.log(results);
//})

con.end();