// Juguetea con las diferentes asignaciones para probar un poco los diferentes tipos.

// Creando objetos...
const pet = {
    name: "Pelotillo",
    fur: "White",
    age: 5,
}

// Y comprobando:
console.log(pet.name) // Pelotillo!

// Aunque si tenemos más de un objeto relacionado podemos hacer una clase!
class Alumno {
    constructor(nombre, guapura, inteligencia) {
        this.nombre = nombre;
        this.guapura = guapura;
        this.inteligencia = inteligencia;
    }
};

// Entonces, podemos instanciar varios objetos de la misma clase muy fácil:
let ivan = new Alumno("Ivan", "guapo", "tontaco");
let alberto = new Alumno("Alberto", "feo", "listillo")

// Comprobemos!
console.log(`${alberto.nombre} es bastante ${alberto.guapura}.`);



// Los arrays son básicamente listas de la compra. :-)
const lista_compra = ["mantequilla", "arroz", "huevos"]; // literalmente!

// Pueden alojar todo tipo de datatypes:
const locura = [Alumno, ivan, null, undefined, "a", 1, true, lista_compra];

//Y pueden accederse por index order:
console.log(locura[4]); // --> a
//O incluso...
console.log(locura[7][1]); // --> arroz



// Las funciones son básicamente operaciones que alojamos para usar más adelante. Molan mucho.
function localtime() {
    valor = new Date().toLocaleString()
    console.log("La fecha y hora local son: " + valor);
};

// ¡Una vez escrita la función, podemos llamarla cuantas veces queramos!
localtime();




// En este tema también se toca el chaining operator. Pondré un ejemplo muy simple de cómo funciona:
let coche = {
    ruedas: 4
};

// Si intentamos acceder a una propiedad inexistente no nos dará un error, pero sí un undefined.
console.log(coche.cohetes);

/*
No ocurriría lo mismo si intentáramos acceder a una propiedad *de una propiedad inexistente*

console.log(coche.cohetes.oxigeno); --> TypeError, cannot read properties of undefined

Para solventar este problema, se puede hacer uso del chaining operator:
*/

console.log(coche.cohetes?.oxigeno);

// Básicamente es como decir: si cohetes existe, accede a oxigeno. Si no, devuelve undefined.




// Relacionado con el chaining operator está el conditional operator. De hecho, su sintaxis es similar. Vamos a poner un ejemplo.
function comprobarString(a) {
    if (typeof a === "string") {
        return (a + " is a string");
    } else {
        return (a + " is not a string")
    }
};

console.log(comprobarString("asdf"));

// Aquí tenemos una sencilla función que comprueba si el valor parametrado es una string o no, pero a pesar de su sencillez se puede simplificar más gracias al conditional operator:

function comprobarNumero(a) {
    return typeof a === "number" ? (a + " is a number") : (a + " is not a number")
};

console.log(comprobarNumero(78));

// Como puede observarse, hemos ahorrado tres líneas de código para obtener el mismo resultado. El tradeoff es la legibilidad, que es más baja.




// OPERATORS

/* Hay bastantes operadores en javascript, y de muchos de ellos no veo la necesidad de explicar nada, y otros tantos son bastante arcanos. A pesar de ello, los listaré exhaustivamente, que no cuesta nada:

1. Operadores de Asignación:

= : Asigna un valor.
+= : Suma y asigna.
-= : Resta y asigna.
*= : Multiplica y asigna.
/= : Divide y asigna.
%= : Asigna el resto de una división.
**= : Exponenciación y asigna.
<<= : Desplazamiento a la izquierda y asigna.
>>= : Desplazamiento a la derecha y asigna.
>>>= : Desplazamiento a la derecha sin signo y asigna.
&= : AND bit a bit y asigna.
|= : OR bit a bit y asigna.
^= : XOR bit a bit y asigna.


2. Operadores Aritméticos

+ : Suma.
- : Resta.
* : Multiplicación.
/ : División.
% : Módulo (resto de la división).
++ : Incremento.
-- : Decremento.
** : Exponenciación.


3. Operadores de Comparación

== : Igualdad (compara el valor).
=== : Igualdad estricta (compara el valor y tipo).
!= : Desigualdad.
!== : Desigualdad estricta.
> : Mayor que.
< : Menor que.
>= : Mayor o igual que.
<= : Menor o igual que.


4. Operadores Lógicos

&& : AND lógico.
|| : OR lógico.
! : NOT lógico (negación).


5. Operadores Bit a Bit

& : AND bit a bit.
| : OR bit a bit.
^ : XOR bit a bit.
~ : NOT bit a bit.
<< : Desplazamiento a la izquierda.
>> : Desplazamiento a la derecha.
>>> : Desplazamiento a la derecha sin signo.


6. Operadores de Cadena (String)

+ : Concatenación de cadenas.
+= : Concatenación y asignación.


7. Operador Condicional (Ternario)

condición ? valor_si_true : valor_si_false (ya examinado)


8. Operador de Coma

expresión1, expresión2 (Evalúa múltiples expresiones y devuelve el valor de la última)


9. Operador de Encadenamiento Opcional

?. (Examinado en este mismo documento)


10. Operador Nullish Coalescing (Fusión Nula)

?? (Devuelve el operando de la derecha si el de la izquierda es null o undefined)


11. Operadores de Tipo

typeof : Devuelve el tipo de una variable.
instanceof : Verifica si un objeto es instancia de una clase o constructor.


Y creo que estos son todos los operadores existentes en javascript.

*/