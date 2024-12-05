// Define con una función recursiva cómo calcularías la serie de Fibonacci.
function fibonacci(num) {
    const index = [BigInt(0), BigInt(1)]
    for (let i = 0; i < num; i++) {
        [index[0], index[1]] = [index[1], (index[0] + index[1])];
    }
    return index[0];
}

// He decidido incluir BigInt() porque no me parece aceptable obtener números aproximados. Esto afecta al rendimiento negativamente.

function fibonacci_good(num) {
    if (num < 2) {
        return num;
    }

        return fibonacci_good(num - 1) + fibonacci_good(num - 2);
}

// Testeo de optimización (he hecho muchas versiones distintas de este ejercicio, esta versión es la más óptima y rápida).
function prueba() {
    const previo = Date.now();
    fibonacci(10000);
    const posterior = Date.now();
    const timing = posterior - previo

    console.log(`${timing}ms`)
}

function prueba2() {
    const previo = Date.now();
    fibonacci_good(20);
    const posterior = Date.now();
    const timing = posterior - previo

    console.log(`${timing}ms`)
}

prueba();
prueba2();

// console.log(fibonacci(69))

module.exports = { fibonacci }
