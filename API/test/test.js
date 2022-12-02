let   chai     = require('chai');
let   chaiHttp = require('chai-http');
const expect   = require('chai').expect;
chai.use(chaiHttp);
const url= 'http://localhost:8095';
//Encapsular en test dentro de la funcion describe() Y describirmos el test

// Test que agrega un estudiante
//
describe('Inserta un estudiante: ',()=>{     
    it('deberia insertar un estudiante', (done) => {       
        chai.request(url) 
        .post('/AgregarEstudiante?NumControl=18100192&NombreEs=Carlos&ApellidoPa=Rojas&ApellidoMa=Castro')
        .end((err, res) => {
            expect(res).to.have.status(200);  
            done()
        });
    });
});

//Test que obtiene todos los estudiantes de la BD
describe('Obtiene todos los estudiantes : ',()=>{   
    it('Deberia obtener todos los estudiantes', (done) => {
        chai.request(url)     
        .get('/MostrarEstudiantes')
        .send()
        .end( function(err,res){
            //console.log(res.body)
            expect(res).to.have.status(200);   
            expect(res).to.be.json;              
            done();
        });
    });
});

//Test que consulta a un solo estudiante
describe('Obtener el estudiante con el NumControl 18100188: ',()=>{
    it('Se obtiene el estudiante con el NumControl 18100188', (done) => {
    chai.request(url)
    .get('/MostrarEstudiante/18100188')
    .end( function(err,res){
    //console.log(res.body)
    expect(res.body)
    //expect(res.body).to.have.property(':ID_Jugador').to.be.equal(1);
    expect(res).to.have.status(200);
    done();
    });
    });
   });

   //Test que elimina el ID que tu pongas 
   describe('Elimina el NumControl 18100188: ',()=>{
    it('Debe eliminar el NumControl 18100188', (done) => {
    chai.request(url)
    .get('/MostrarEstudiantes')
    .end( function(err,res){
    //console.log(res.body)
    //expect(res.body).to.have.lengthOf(2);
    expect(res).to.have.status(200);
    chai.request(url)
    .del('/EliminarEstudiante/18100188')
    .end( function(err,res){
    //console.log(res.body)
    expect(res).to.have.status(200);
    chai.request(url)
    .get('/MostrarEstudiantes')
    .end( function(err,res){
    //console.log(res.body)
    //expect(res.body).to.have.lengthOf(21);
    //expect(res.body[1]).to.have.property('ID_Jugador').to.be.equal(2);
    expect(res).to.have.status(200);
    done();
    });
    });
    });
    });
   });

//Test que actualiza el ID
describe('Actualiza el NumControl que pongas: ',()=>{
    it('Deberia de actualizar el NumControl', (done) => {
    chai.request(url)
    .put('/ActualizarEstudiante/18100189?NombreEs=Luis&ApellidoPa=Lopez&ApellidoMa=Hdz')
    .end( function(err,res){
    //expect(res.body).to.have.property('days').to.be.equal(20);
    expect(res).to.have.status(200);
    done();
    });
    });
   });
