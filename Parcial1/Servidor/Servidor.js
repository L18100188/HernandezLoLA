let http=require('http');

let servidor=http.createServer((req,res)=> {
    res.write("Servidor http esta contestado 14/09/2022")
    res.end()

});

servidor.listen(8080,()=>(console.log('Servidor http prendido')))