let inputTextguardado = document.querySelector("#ingresa-nuevaPalabra");
let botonGuardar = document.getElementById("guardar-empezar");  
let cancelar = document.getElementById("cancelar");
const guardado = JSON.parse(localStorage.getItem("datos"));



function guardarPalabras(){


 let palabraIngre = inputTextguardado.value;
 

 guardado1 = guardado.concat(palabraIngre);

 localStorage.setItem('datos', JSON.stringify(guardado1));
 
}




botonGuardar.addEventListener(("click"),function(event){  
    guardarPalabras();

   window.location.href='ahorcado-beta.html';

   });

   cancelar .addEventListener(("click"),function(event){
    window.location.href='index.html';

   });