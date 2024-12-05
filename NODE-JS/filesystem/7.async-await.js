//Async Await
const {readFile} = require("node:fs/promises");

// IIFE - Inmediatly Invoked Function Expression
(
    async () => {
        //Primer archivo
        console.log("leyendo el primer archivo...")

        const text = await readFile("./archivo.txt", "utf-8")
        console.log("primer texto", text)



        //evidencia de asincronía
        console.log("Intentando hacer cosas mientras lee el archivo")


        //Segundo archivo
        console.log("leyendo el segundo archivo...")

        const text2 = await readFile("./archivo2.txt", "utf-8")
        console.log("segundo texto", text2)
    }
)();

/*
Al respecto de las IIFE (immediatly invoked function expression):

Son simplemente funciones anónimas que se llaman a sí mismas inmediatamente. Vamos a poner un ejemplo:

*/ 

(() => {
    console.log("Desde una IIFE con arrow function");
})();

// también pueden expresarse como una función anónima normal:

(function(){
    console.log("Desde una IIFE con función anónima clásica");
})();

// Pueden contener parámetros...

((nombre) =>{
    console.log(`Hola, ${nombre}, desde una IIFE con parámetro`);
})("Ivan");

/*
Propósito:
Encapsulación: Mantiene las variables dentro de un ámbito local, evitando conflictos en el espacio global.
Ejecución inmediata: Útil para inicializar variables o configuraciones rápidamente.

Realmente sería lo mismo que hacer lo siguiente:
*/

function regular(){
    console.log("Función regular");
}
regular();