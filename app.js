let numeroSecreto = 0;
let intentos = 0;
let listaNumeros = [];
let numeroMaximo=10;
console.log(numeroSecreto)

condicionesIniciales();

function condicionesIniciales(){
    Etiquetas('h1','Juego del numero secreto')
    Etiquetas('p',`Indica un numero del 1 al ${numeroMaximo}`)
    intentos = 1;
    numeroSecreto = generarNumeroSecreto();
    limpiar();
}


function intentoDeUsuario(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value); 
    console.log(numeroUsuario);
    console.log(typeof(numeroUsuario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));

    if(numeroUsuario === numeroSecreto){
        Etiquetas('p',`Felicidades! Acertaste en ${intentos} ${intentos==1 ? "Oportunidad" : "Oportunidades"}!!!`);
        document.querySelector("#reiniciar").removeAttribute("disabled");
    } else{
        if(numeroUsuario > numeroSecreto)
    {
        Etiquetas('p',`Cuidado! El numero secreto es menor a ${numeroUsuario}`);
    } else{
        Etiquetas('p',`Cuidado! El numero secreto es mayor a ${numeroUsuario}`);
    }
    intentos++;
    limpiar();
    } 
    
    return;
}

function nuevoJuego(){
    alert("Preparado? Listo!!")
    condicionesIniciales();
    //deshabilitar el boton
    document.querySelector("#reiniciar").setAttribute("disabled","true");
}

function Etiquetas(elemento,texto){
    let etiquetaHTML = document.querySelector(elemento);
    etiquetaHTML.innerHTML= texto;
}

function generarNumeroSecreto(){
  let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
  console.log(numeroGenerado)
  console.log(listaNumeros)
  if (listaNumeros.length==numeroMaximo){
    Etiquetas('p', "Se han sorteado todos los numeros posibles, Gracias por participar!!")
  } else{ 
    if (listaNumeros.includes(numeroGenerado)){
        return generarNumeroSecreto();
        } else{
        listaNumeros.push(numeroGenerado);
        return numeroGenerado;
        }
     }


  
}

function limpiar(){
let caja =  document.querySelector("#valorUsuario");
caja.value = '';
}