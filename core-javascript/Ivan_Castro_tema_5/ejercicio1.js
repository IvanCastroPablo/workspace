// Define con una función recursiva cómo calcularías la serie de Fibonacci.

let ultimo = 0;
let penultimo = 1;
let actual;

// Dado que la sucesión es infinita la voy a parar a partir del 15º.
for (let i = 0; i < 15; i++) {
    actual = ultimo + penultimo;
    console.log(actual)
    penultimo = ultimo;
    ultimo = actual;
}