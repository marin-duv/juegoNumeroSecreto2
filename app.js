/*

let titulo = document.querySelector('h1');
//para realizar el reto de ejercicios 
//titulo.innerHTML = 'Hora del desafio'
titulo.innerHTML = 'Juego del número secreto'

*/

/*
antes se asignaba asi a parrafo `p`
let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Selecciona un número del 1 al 10'

*/

// funcion generica

let numeroSecreto = generarNumeroSecreto();

console.log("numero seceto = " , (numeroSecreto));

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento); 
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log ("numero de usuario = ", (typeof(numeroDeUsuario)));
    console.log("numero de usuario= ", (numeroDeUsuario));
        console.log ("numero secreto = ", (typeof("numero secreto, ", numeroSecreto)));
    console.log("numero secreto=", (numeroSecreto));
    // el "===" compara y debe ser igual en tipo y en valor si no retorna FALSO
    console.log(numeroDeUsuario === numeroSecreto);
    return;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*60)+1;
}

asignarTextoElemento('h1','Juego del Número Secreto ');
asignarTextoElemento('p', 'Selecciona un número del 1 al 60')



// solo use un boton para realizar el reto de ejercicios 
/*
function console() {
    alert ('el boton fue clickeado');
    let ciudad = prompt ('¿Nombre de la ciudad de Brasil?');
    alert (`Estuve en ${ciudad} y me acorde de ti`);
    alert (`Yo amo JS`);
    let numero1 = parseInt(prompt (`Escribe el primer número`));
    let numero2 = parseInt(prompt (`escribe el segundo número`));
    suma = (numero1 + numero2);
    alert (`Suma es igual a ${suma}`);
}
*/