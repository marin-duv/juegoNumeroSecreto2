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

console.log("numero secreto = " , (numeroSecreto));

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

/*
//1.Crear una función que muestre "¡Hola, mundo!" en la consola.
function saludo() {
    //alert ('Hola Mundo¡');
    console.log('Hola Mundo¡');
    return;
}
saludo();

*/

/*
//2.Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.

function saludoNombre() {
    let nombre = prompt ("Escribe tu nombre: ");
    console.log(`Hola  ${nombre} ¡¡¡`);
    return;
}
saludoNombre();
*/

/*
//3.Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
//opcion 1
function doble(){
    let numero = prompt ("Anota un número:");
    doblar= (numero * 2);
    alert (`El doble del número es ${doblar}`);
    return;
}
doble();
*/

/*
// opcion 2

function doble(numero_a){
    //let numero = prompt ("Anota un número:");
    doblar= (numero_a * 2);
    alert (`El doble del número es ${doblar}`);
    return;
}
doble(10);

*/

/*
//4. Crear una función que reciba tres números como parámetros y devuelva su promedio.
function notas(){
    let nota_1 = parseInt(prompt ("Escribe la primer nota"));
    let nota_2 = parseInt(prompt ("Escribe la segunda nota"));
    let nota_3 = parseInt(prompt ("Escribe la tercer nota"));
    promedio = ((nota_1 + nota_2 + nota_3 ) / 3)
    alert (`El promedio es: ${promedio}`);
    return;
}
notas();
*/

/*
//5.Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function numeroMayor(numero_1, numero_2){
    // las siguientes lineas no van son inecesarias
    //let numero_1 = parseInt(prompt (`escribe el primer número`));
    //let numero_2 = parseInt(prompt (`escribe el segundo número`));
    if (numero_1 > numero_2) {
        alert(`El numero mayor es ${numero_1}`);
    } else {
        alert(`El numero mayor es ${numero_2}`);
    }
    return;
}
numeroMayor(208,120);
*/

/*
//6.Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function multiplicar(numeroA){
    resultado = (numeroA * numeroA);
    alert (`El resultado es: ${resultado}`);
}
multiplicar(90)
*/

/*
// solo use un boton para realizar el reto de ejercicios 
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