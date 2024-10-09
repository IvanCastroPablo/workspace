// Define con una función recursiva cómo calcularías la serie de Fibonacci.
function fibonacci(num){
    let index = [BigInt(0), BigInt(1)]
    for (let i = 0; i < num; i++) {
        [index[0], index[1]] = [index[1], (index[0] + index[1])];
    }
    return index[0];
}
// He decidido incluir BigInt() porque no me parece aceptable obtener números aproximados. Esto afecta al rendimiento negativamente.


// Testeo de optimización (he hecho muchas versiones distintas de este ejercicio, esta versión es la más óptima y rápida).
function prueba() {

    fibonacci(200000);

    let sum = 0;
    for (let i = 0; i < 1000000; i++) {
        sum += i;
    }
}

console.time('timer');  // Empieza el temporizador
prueba();
console.timeEnd('timer');

console.log(fibonacci(69))

module.exports = {fibonacci}