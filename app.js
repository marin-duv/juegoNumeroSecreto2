let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del desafio'

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Selecciona un número del 1 al 10'

function intentoDeUsuario() {
    alert ('click desde el boton');
}

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