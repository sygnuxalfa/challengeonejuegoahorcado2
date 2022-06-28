btonNuevoJuego = document.getElementById("nuevo-juego");
btonAgregarPalabra=document.getElementById("agregar-palabra");
localStorage.setItem('datos', JSON.stringify(['brasilia','bogota','lima','mexico']));



btonNuevoJuego.addEventListener(("click"),function(event){  

 window.location.href='ahorcado-beta.html';

});

btonAgregarPalabra.addEventListener(("click"),function(event){  

    window.location.href='nuevaPalabra.html';
   
   });