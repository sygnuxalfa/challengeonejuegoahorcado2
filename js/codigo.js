var cajaLetras = document.querySelector("#caja-letras");
var ingresoLetra = document.querySelector("#letra");
var btonNuevoJuego = document.querySelector(".boton");
var btonDesistir = document.querySelector(".boton1");
var item =document.querySelector(".item");
var item2 =document.querySelector(".item2");
let muneco = document.querySelectorAll("#muneco");
let informacion =document.querySelector(".informacion");
let palabraAdivinar = [];
let palabraMostrar = [];
let letrasAsertadas =[];
let numerosInten = -1;
const guardado2 = JSON.parse(localStorage.getItem("datos"));



  function teclaPulsada(event){
     
    var valorLetra = event.key;

    if ((event.keyCode != 32) && (event.keyCode < 65) || (event.keyCode > 90) && (event.keyCode < 97) || (event.keyCode > 122)){
    event.returnValue = false;}

    else{
  
    document.getElementById("letra").innerHTML=valorLetra;
    informacion.textContent=" ";
  
    comprobarLetra();
    }


  }




  function construirCajas(){

    let posAleatoriaListaPalabras = _.random(guardado2.length-1);
    let palabraAleatoria = guardado2[posAleatoriaListaPalabras];

    palabraAdivinar = palabraAleatoria.split("");

    for( let letras of palabraAdivinar){
      

      let rayas = document.createElement("canvas");
          rayas.classList.add("barras");
          item2.appendChild(rayas);

       var caja = document.createElement("textarea");
           caja.classList.add("stilo","invisible");
      var totalcajas = item.appendChild(caja); 
   
      palabraMostrar.push(totalcajas);
  
 
    } 
    
    
  }




  function comprobarLetra(){

       ingresoLetra.focus(); 
      let  letraIngresada = ingresoLetra.value.toLowerCase();

      for (const [posicion, letraAdivinar] of palabraAdivinar.entries()){

        if (letraIngresada == letraAdivinar){

          palabraMostrar[posicion].textContent = letraAdivinar;

          palabraMostrar[posicion].classList.add("visible");

          comprobarJuego()
 
      }
       
     
    }
 
    let c =  cajaLetras.textContent.includes(letraIngresada);  
    let p = palabraAdivinar.includes(letraIngresada);

    
    if( !c && !p ){

      numerosInten +=1;
      cajaLetras.textContent +=letraIngresada;
    }

    if(c){

      informacion.textContent="Letra ya ingresada"
    }
    numerosIntentos();
     
   }




     function comprobarJuego(){
       
      for(var i=0; i<palabraMostrar.length; i++){

        var letraCorrecta = palabraMostrar[i].textContent;

        letrasAsertadas[i] = letrasAsertadas[i] = letraCorrecta;
     
    }
      let comprobar1=letrasAsertadas.toString().replace(/,/g,"");
      let comprobar2=palabraAdivinar.toString().replace(/,/g,"");

      if (comprobar1.includes(comprobar2)){

      informacion.classList.add("ganaste");

      informacion.textContent="Ganaste"+" "+"Felicidades"
      document.querySelector("#letra").remove();


      }


 
     }

     function numerosIntentos(){

      if( numerosInten == 0){     
        var ver = muneco[numerosInten];
        ver.classList.add("visible");
 
      }
 
      if( numerosInten == 1){
       var ver = muneco[numerosInten];
       ver.classList.add("visible");
 
     }
 
     if( numerosInten == 2){
       var ver = muneco[numerosInten];
       ver.classList.add("visible");
 
     }
 
     if( numerosInten == 3){
       var ver = muneco[numerosInten];
       ver.classList.add("visible");
 
     }
 
     if( numerosInten == 4){
       var ver = muneco[numerosInten];
       ver.classList.add("visible");
 
     }
 
     if( numerosInten == 5){
       var ver = muneco[numerosInten];
       ver.classList.add("visible");
 
       informacion.textContent="Usted perdio la ciudad es:"+" "+ palabraAdivinar.toString().replace(/,/g,"");
       document.querySelector("#letra").remove();
 
     }
 
     }

    ingresoLetra.focus(); 
    construirCajas();

  ingresoLetra.addEventListener('keydown', teclaPulsada);

  btonNuevoJuego.addEventListener(("click"),function(event){
    location.reload(true);
   });

   
  btonDesistir.addEventListener(("click"), function(event){
    
    window.location.href='index.html';
  
   
   });


   


    
   

   
    
    
    
    
    
    
    


   
 