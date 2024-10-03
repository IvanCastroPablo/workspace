// EXPRESSIONS AND STATEMENTS

/* 
Te hago comentarios en todo esto porque no me queda claro qué quieres que haga más allá de jugar con el código.

Espero que con esto sea suficiente para mostrar mi interés y mis horas de estudio. :)
*/

let nested_object = { property1: { stringie: "hola" }, property2: 2.3 }
// A pesar de que no es muy legible porque lo has escrito en una sola línea, es básicamente un objeto que es propiedad de otro. Para mí es un poco absurdo pensar en esto como un "objeto", desde python lo veo como una library dentro de otra.

let matrix = [[1,2,3], [4,5,6], [7,8,9]];
// Un poco en la misma línea. Es un array compuesto de arrays. Nada extraño.

let sparseArray = [1,,,,5];
// Este es un concepto curioso. En el ejemplo ofrecido tenemos un array cuyos índices 0 y 4 están asignados, mientras que los intermedios están sin asignar. Si intentamos acceder a ellos saltará un undefined.

let suma = function(a, b) { return a * b; };
suma(4, 5);
suma(18, 229);
// A mí no me la cuelas. Tu función está multiplicando números parametrados, no sumándolos.

let a = { b: {} };
a.b?.c?.d  // => undefined
// Comentado en el ejercicio 1. Con el chaining operator podemos intentar acceder a propiedades de valores inexistentes sin que salte un TypeError.

new Date;
// Básicamente estás instanciando la clase Date. No he explorado cómo es internamente Date, pero sí que sé que puedes ejecutarlo para obtener la fecha y hora actual.
console.log(new Date)




let increment_var = 5;
increment_var++; // incrementas en 1 el valor numérico de la variable.
increment_var  // aquí ya vale 6. :)

4 && 5; // ambas son verdaderas, devuelve true
0 && 2; // una es falsa, por lo tanto devuelve false
0 || 2; // una es verdadera, por lo tanto devuelve true
0 || 0; // ambas son falsas, por lo tanto la expresión es false.

"3" == 3;   // El valor es el mismo, por lo tanto la expresión es true.
"3" === 3;  // El valor es es el mismo, pero no el tipo. La expresión es false.


let point = {x: 1, y: 1};   // Define an object
"x" in point                // => true: object has property named "x"
"z" in point                // => false: object has no "z" property.
"toString" in point         // => true: object inherits toString method

let data = [7,8,9];         // An array with elements (indices) 0, 1, and 2
"0" in data                 // => true: array has an element "0"
1 in data                   // => true: numbers are converted to strings
3 in data                   // => false: no element 3


i = j = k = 0;              // Initialize 3 variables to 0

let suerte = 1;
let postfij = suerte ++;    // 1          
let prefij = ++ suerte;     // 3

console.log(postfij) // Primero se devuelve (y asigna, en este caso) antes del incremento.
console.log(prefij) // Se incrementa primero, y luego se devuelve.


// eval toma una cadena de texto como un argumento y la evalúa como si fuera código.
eval("3*5");    // 15

