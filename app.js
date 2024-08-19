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

//Version 1.1 de juego de numero secreto
// funcion generica
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
/*
// esto ya no se usan asi 
let numeroSecreto = generarNumeroSecreto();
let intentos = 1;
*/

console.log("número secreto = " , (numeroSecreto));

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento); 
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //*console.log ("número de usuario = ", (typeof(numeroDeUsuario)));
    //*console.log("número de usuario= ", (numeroDeUsuario));
    //*console.log ("número secreto = ", (typeof("número secreto, ", numeroSecreto)));
    //*console.log("número secreto=", (numeroSecreto));

    // el "===" compara y debe ser igual en tipo y en valor si no retorna FALSO
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`FELICIDADES ACERTASTE EL NÚMERO SECRETO ¡¡¡ en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // el usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es MENOR');
        } else {
            asignarTextoElemento('p','El número secreto es MAYOR');
        }
        intentos++;
        console.log("número de intentos=", (intentos));
        limpiarCaja();
    }
    return;
}

function ejecutarConEnter (event){
    if (event.key === 'Enter'){
        //*console.log('HAS presionado enter');
        verificarIntento();
    }
}
document.addEventListener('DOMContentLoaded', (event) => {
    const input = document.getElementById('valorUsuario');
    input.addEventListener('keydown', ejecutarConEnter);
});




function limpiarCaja (){
    /*
    //opción 1
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value  = '';
    */
    //opción 2 ok
    document.querySelector('#valorUsuario').value= '';
}

function generarNumeroSecreto() {
    //return Math.floor(Math.random()*60)+1;
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // si ya sorteamos todos los numeros 
    if (listaNumerosSorteados.length == numeroMaximo){
        //validador para evitar recursividad viciada 
        asignarTextoElemento('p', 'Ya se sortearon todos los Números Posibles');
    } else { 
        // si el numero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            //aplicando recursividad
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del Número Secreto ');
    asignarTextoElemento('p', `Selecciona un número del 1 al ${numeroMaximo}`)
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    alert('INICIANDO JUEGO NUEVO');
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje intervalo de números
    //generar numero aleatorio
    //inicializar numero de intentos
    condicionesIniciales();  
    //desabilitar boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled',true);
}

condicionesIniciales();


//AQUI ME QUEDE :
//https://app.aluracursos.com/course/logica-programacion-explorar-funciones-listas/task/86064



/*
// se desabilitan por que se encapsularon en una funcion de mensajes inciales
asignarTextoElemento('h1','Juego del Número Secreto ');
asignarTextoElemento('p', 'Selecciona un número del 1 al 60')
*/


//Desafios_A

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
    return;
}
multiplicar(9)
*/



/*

//DESAFIOS_B

//1-Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.

function masaCorporal(altura, peso) {
imc = ((peso) / (altura * altura));
console.log('imc= ',(imc));
return;
}
masaCorporal(1.74 , 85);


//IMC RESULTADO ES: 28.075

//IMC 	Nivel de peso
//Por debajo de 18.5 	Bajo peso
//18.5—24.9 	Peso saludable
//25.0—29.9 	Sobrepeso
//30.0 o más 	Obesidad


//2-Crea una función que calcule el valor del factorial de un número pasado como parámetro.

//Bibliografia: 
//Explicacion del factorial liga de internet: 
//https://factorial.mx/numero-funcion-factorial

function factorial(factor) {
    if (factor < 0) {
        return ("El Factorial no puede ser negativo");
    }
    if (factor === 0 || factor === 1) {
        return 1;
    }
    let resultado = 1;
    for (let i = 2; i <= factor; i++){
        //console.log(i);
        resultado *= i;
        //console.log(i);
        //console.log(resultado);
    }
    return resultado;
}
console.log(('El Factorial es ='),(factorial(4)));
//console.log(('El Factorial es ='),(factorial(0)));
//console.log(('El Factorial es ='),(factorial(-3)));


//funcion dolares a pesos 
//Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el 
//valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del
//dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.

function conversor (pesos, dolar){
    return  (pesos * dolar);
    //el valor del dolar se debe conseguir de una api, para tener actualizada la conversion
}
console.log ("Convertir Dolar a Peso = ", (conversor(1600, 19.18)));
//sueldo de programador que debo buscar 


//Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular,
//utilizando la altura y la anchura que se proporcionarán como parámetros

function rectangulo(alto, ancho){
    area = (alto * ancho);
    alert(`Èl area es ${area}`);
    perimetro = (alto * ancho) * (2);
    alert(`Èl perimetro es ${perimetro}`);
    return;
}
rectangulo(10,20);


//Crea una función que muestre en pantalla el área y el perímetro de una sala circular, 
//utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

function circulo(radio ){
    area = (3.14) * (radio * radio );
    alert (`area de circulo es = ${area}`); 
    perimetro = (3.14) * (radio + radio);
    alert (`perimetro de circulo es = ${perimetro}`); 
    return;
}
circulo(8);

//Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

function multiplica(numero){
    for (i=0; i<=10; i++){
        resultado = i * numero;
        console.log(`${numero} x ${i} = ${resultado}`)
    }
}
multiplica(8);


//FIN DE DESAFIOS_B
*/

//DESAFIO_C

//1-Crea una lista vacía llamada "listaGenerica".

//opcion 1
let listaGenerica= [];
console.log (`Esta es la lista generia `, (listaGenerica));
//(solucion del maestro es igual a opcion 1)

//2-Crea una lista de lenguajes de programación llamada
//"lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

//opcion 1
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
console.log (`Vector de lenguajes de programación`, (lenguagesDeProgramacion));
//(solucion del maestro es igual a opcion 1)

//3-Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
//opcion 1
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');
console.log (`Vector completo de lenguajes de programación`, (lenguagesDeProgramacion));
//(solucion del maestro es igual a opcion 1)

//4-Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.

//opcion 1

function ver () {
    console.log (`Vector mostrado con una funcion los lenguajes`, (lenguagesDeProgramacion));
    return;
}
ver()

//solucion  maestro

function mostrarLenguagesSeparadamente() {
    for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
        console.log(lenguagesDeProgramacion[i]);
    }
}

mostrarLenguagesSeparadamente();


//5-Crea una función que muestre en la consola todos los elementos de la lista
// "lenguagesDeProgramacion en orden inverso.

// opcion 1
function verInverso() {
    const reverse = lenguagesDeProgramacion.reverse();
    console.log (`Vector mostrado con una funcion ORDEN INVERSO los lenguajes`, (reverse));
    return;
}
verInverso()

//solucion maestro

function mostrarLenguagesReversoSeparadamente() {
    for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
        console.log(lenguagesDeProgramacion[i]);
    }
}

mostrarLenguagesReversoSeparadamente();


//6-Crea una función que calcule el promedio de los elementos en una lista de números.

//opcion 1

function calificaciones(){
    const notas = [90,70,80,90,90,100,100,100];
    const suma = notas.reduce((valorAnterior, valorActual) => {
        return valorAnterior + valorActual;
    },0);
    console.log (`Suma de las calificaciones: `, (suma));
    promedio = (suma) / (notas.length);
    console.log (`tamaño de lista de calificaciones`, (notas.length));
    console.log (`El promedio es : `, (promedio));
    return;
}
calificaciones();


//solucion maestro

function calcularMedia(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
    }
    return suma / lista.length;
}

let numeros_h = [10, 20, 30, 40, 50];
let media = calcularMedia(numeros_h);
console.log("Média: (o promedio) 's' ", media);

//7- Crea una función que muestre en la consola el número más grande
//y el número más pequeño en una lista.

//opcion 1

function numeroMayorMenor(){
    let numeros = [1,2,3,4,5,6,7,8,9,10,11,13,14,15,16];
    //opcion 1 numero minimo si funciona
    /*
    var min = numeros [0];
    for (let i=0; i < numeros.length; i++) {
        if (min<numeros[i++]){
            (min=numeros[i++])
        }else if (min > numeros [i++]){
            (numeros[i++]=min)
        } else {
            console.log(`Número minimo = `,(min));
        }
    }
    */

    //En las siguientes lineas utilice el operador spread (aun no conozco ) y
    //asi funciono el número min y max del array
    console.log (`Número menor = `,(Math.min(...numeros)));
    console.log(`Número mayor = `,(Math.max(...numeros)));
    return;
}
numeroMayorMenor();


//solucion maestro

function encontrarMayorMenor(lista) {
    let mayor = lista[0];
    let menor = lista[0];
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > mayor) {
            mayor = lista[i];
        }
        if (lista[i] < menor) {
            menor = lista[i];
        }
    }
    console.log("Mayor 's' :", mayor);
    console.log("Menor:'s' :", menor);
}
let numeros_a = [15, 8, 25, 5, 12];
encontrarMayorMenor(numeros_a);



//8-Crea una función que devuelva la suma de todos los elementos en una lista.
// se utilizo reduce

//opcion_1

function suma(){
    elementos = [8,6,2,10,50];
    let resultado = elementos.reduce(
        (sum, item) => sum + item,
        0
    );
    console.log(`la suma es: `, (resultado));
    return;
}
suma();

//solucion maestro
function calcularSuma(lista_h) {
    let suma_ok = 0;
    for (let i = 0; i < lista_h.length; i++) {
    suma_ok += lista_h[i];
    }
    return suma_ok;
}
let numeros = [15, 8, 25, 5, 12];
let suma_ok = calcularSuma(numeros);
console.log("Suma: 's' ", suma_ok);

//9-Crea una función que devuelva la posición en la lista donde 
//se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.

//opcion 1

function buscarPosicion(lista, elemento){
    for ( let i = 0; i < lista.length; i++) {
        if (lista[i] === elemento){
            return i;
        }
    }
    return -1;
}

const lista = [1, 2, 3, 4, 5];
const elemento = 3;
const posicion = buscarPosicion (lista, elemento);
console.log("La posición en la lista es:", posicion);// imprime la posicion 2

// solucion maestro ---es la misma---


//10-Crea una función que reciba dos listas de números del mismo tamaño
//y devuelva una nueva lista con la suma de los elementos uno a uno.

//opcion_1

function sumarListas (lista_1, lista_2) {
    if (lista_1.length !== lista_2.length) {
        throw new Error ("A Q U I ===> listas deben tener el mismo tamaño !");
    }
    const lista_3 = [];
    for ( let i = 0; i < lista_1.length; i++){
        lista_3.push(lista_1[i]+lista_2[i]);
    }
    return lista_3;
}
const lista_1 = [584, 457, 854];
const lista_2 = [879, 546, 485];
const listaSuma = sumarListas (lista_1, lista_2);
console.log("La suma de las listas es: ",listaSuma);

// solucion propuesta por el maestro

function sumListas(lista_d, lista_f) {
    return lista_d.map((num, index) => num + lista_f[index]);
}

const lista_d = [1, 2, 3];
const lista_f = [4, 5, 6];
const resultado_sum = sumarListas(lista_d, lista_f);
console.log("Suma de las listas `s` " , resultado_sum);  




//11-Crea una función que reciba una lista de números y devuelva una nueva 
//lista con el cuadrado de cada número.

//opcion 1

function cuadradoDeLista (lista_a){
    const lista_b = [];
    for (let i = 0; i < lista_a.length; i++) {
        lista_b.push(lista_a[i]*lista_a[i]);
    }
    return lista_b;
}
const lista_a = [1,2,3,4,5,6,7,8,9,10];
const resultadoCuadrado = cuadradoDeLista (lista_a);
console.log ("El cuadrado de la lista es: ", resultadoCuadrado);

//resultado propuesto maestro solucion

function cuadradoLista(lista_x) {
    return lista_x.map(num => num ** 2);
}
const lista_x = [1, 2, 3, 4, 5, 6];
const resultado = cuadradoLista(lista_x);
console.log("Cuadrado de la lista `s` ", resultado);  



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
    return;
}
*/