//Declaración de una variable
let nombre;
// Inicialización
nombre = 'aldo'; 

let numero = 10; //Tipo de dato número, nombre de variable numero

let esHombre = true; //

let usuario = undefined; //sin valor definido

let auto = null; // valor nulo

const PI = 3.1416;

let tipoDato = typeof nombre;

console.log(tipoDato);

let fruta = {
    color: 'roja',
    sabor: 'acida',
    precio: 97,
    hermana: { //propiedad con valor tipo objeto
        color:'amarilla'
        sabor: 'dulce',
        precio: 110,
        hermana: { //propiedad con valor tipo objeto
            color:'azul'
            sabor: 'agridulce',
            precio: 120,
            hermana: { //propiedad con valor tipo objeto
                color:'verde'
                sabor: 'dulce',
                precio: 10,
                hermana: { //propiedad con valor tipo objeto
                    color:'rosa'
                    sabor: 'dulce',
                    precio: 80,
                }
            },
        },
    },
    meses: ['enero', 'febrero']
};

let mesesDeCosecha = fruta.meses;
mesesDeCosecha[0] //enero, por posición a los arreglos
mesesDeCosecha[1] //febrero

console.log(fruta.hermana.hermana.hermana.hermana.precio);
let hermana = fruta.hermana;

//while(hermana) {
    //hermana = hermana.hermana;
//}
//for(let i = fruta.hermana; !i.hermana; i = i.hermana) {
//}

//function fibonacci(i) {
    //if(i === 0 || i === 1){
        //retunr 1
    //} else {
        //retunr fibonacci(1-1) + fibonacci
    //}
//}

console.log(usuario); //undefined

let resultado = 10 + 10; // sumar valores numericos
console.log(resultado);

let concatenacion = 'Aldo' + 'Aldaco' //une los strings o datos en un solo string
console.log(concatenacion);

let prueba = 5 + 5; // conversion implicita
let prueba2 = Number('5') + 5; //conversion explicita
console.log(prueba, prueba2);

let resta = 5 - 5; // conversion explicita
let resta2 = 5 - '5';
let resta3 = '5' - '5'; // los convierte en numero
console.log(resta, resta2, resta3);

let multiplicacion = 10 * 2:

et division = 10 / 2:

let potencia = 5 ** 2;

console.log(potencia, multiplicacion, division)

// operadores logicos &&, ||, >=, <=, == , ===

//Estructuras de control, le indicamos a JS que se hará una estructura de control logica
// if, else, switch

let esHumano = true;
if(esHumano === true) {
    console.log('Aldo es humano');
}

let Jonatan = 18;
if(Jonatan >= 18) {
    console.log('Es mayor de edad');
} else { //en caso contrario 
    console.log('Es menor de edad');
}


let Jonatan2 = 30;
if(Jonatan2) >= 18 && Jonatan2 < 30) {
    console.log('Es mayor de edad');
} else if(Jonatan2 >= 30) {
    console.log('Es adulto mayor');
} else {
    console.log('Es menor de edad');
}


switch(Jonatan) { //Cuando hay más de una condición, para validar más de un caso
    case 18: //  Jonatan >= 18 innecesario poner esto porque no lo ejecuta, y ehecuta el default
        console.log('Es mayor de edad');
        break;
    case 30:
        console.log('Es adulto mayor');
        break;
    default;
        console.log('Es menor de edad')
}


let string = 'adios';
switch(string) {
    case 'adios':
        console.log('Es la despedida');
        break;
    case 'hola':
        console.log('Hola mundo');
        break;
    default:
        console.log('Cualquier otro caso');
}

// CICLOS

let Jonathan = 19;
while(Jonathan > 18 && < 30) {
    //codigo siempre y cuando se cumpla la condicion entrce parentesis
    console.log('Jonathan es mayor de edad', Jonathan);
    //Jonathan += 1; //se modifica la variable a +1 y topa en 30 y deja de ejecutarse
    Jonathan++;
    console.log(Jonathan);
}

// while se ejecuta infinitamente
// for tiene un limite que se le indica
// todas las condiciones se escriben dentro de los parentesis
// for recibe 3 cosas 1. valor inicial 'i'=iterador, 2. condicion donde se va a detener, 3. control del itinerador
    

let annie = 19;
for(let annie = 18;annie < 30; annie++) {
    console.log('Annie es mayor de edad', annie)
}
//loops ejecutan codigo de manera repetida
//forin forof

for(let elemento of array) {
    console.log()
}