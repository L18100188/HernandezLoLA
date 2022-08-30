document.getElementById('btn').addEventListener("click", function (){
    hacerP(); 
 });

 /*document.getElementById('btn').addEventListener("click", async function (){
    let dato = await hacerP();
    console.log(dato);

 });*/

 function hacerP() {
     fetch("https://api.waifu.pics/sfw/waifu")
     .then( res => res.json() )
     .then( datos => document.getElementById('img').src=datos.url )
 }

 /*async function hacerP() {
     
     let res = await fetch("https://api.waifu.pics/sfw/waifu");
     let datojson = await res.json();
     return datojson;
 }*/ 