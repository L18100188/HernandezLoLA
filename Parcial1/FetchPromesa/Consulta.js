document.getElementById('btn').addEventListener("click", function (){
    hacerP(); 
 });


 function hacerP() {
     fetch("https://api.waifu.pics/sfw/waifu")
     .then( res => res.json() )
     .then( datos => document.getElementById('img').src=datos.url )
 }

