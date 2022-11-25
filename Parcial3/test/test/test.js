let   chai     = require('chai');
let   chaiHttp = require('chai-http');
const expect   = require('chai').expect;
chai.use(chaiHttp);const url= 'http://localhost:8081';
//Encapsular en test dentro de la funcion describe() Y describirmos el test

describe('Inserta un estudiante: ',()=>{     
    it('deberia insertar un estudiante', (done) => {       
        chai.request(url)   
        .post('/post')
        .send({ NumControl:"18100194",NombreEs:"siuL", ApellidoPa:"zdH", ApellidoMa:"zepol" })
        .end( function(err,res){
            expect(res).to.have.status(200);        
            expect(res.text).to.be.a('string');      
             done();
            }); 
    });
});

describe('Obtiene todos los estudiantes: ',()=>{   
    it('Deberia obtener todos los estudiantes', (done) => {
        chai.request(url)     
        .get('/get')
        .send()
        .end( function(err,res){
            expect(res).to.have.status(200);   
            expect(res).to.be.json;              
            done();
        });
    });
});