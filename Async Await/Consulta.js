document.getElementById('btn').addEventListener("click", async function (){
    let dato = await hacerP();
    console.log(dato);

 });


 async function hacerP() {
     
     let res = await fetch("https://api.waifu.pics/sfw/waifu");
     let datojson = await res.json();
     return datojson;
 }