// Preguntar un número de números a introducir, después, preguntar por esos números, por último, sacar por pantalla la suma de los mismos.

let numero;
let listaCifras = [];

// Función con el primer prompt
function preguntarNumero() {
    numero = parseFloat(prompt("¿Cuántos números quieres sumar? "));
    return 1;
}

// Lógica para llenar la array
function preguntarCifras() {
    for (let i = 0; i < numero; i++){
        let cifra = parseFloat(prompt("Añade cifra: "));
        if (!isNaN(cifra)) {
            listaCifras.push(cifra);
        } else {
            alert("Valor no reconocido. Agur.")
            return;
        }
    } return 1;
}

// Reduciendo la array e sacándola en pantalla
function sumaCifras(a) {
    let suma = a.reduce(function(acumulador, valorActual) {
        return acumulador + valorActual;
    }, 0);
    document.write(`La suma de todas las cifras es ${suma}.`);
}

// Mi bloque lógico favorito. :) Lo voy a usar siempre.
if (preguntarNumero() == 1 && !isNaN(numero)) {
    if (preguntarCifras() == 1 && listaCifras.length > 0) {
        sumaCifras(listaCifras)
    } else {
        document.write("No has añadido valores con los cuales trabajar.")
    }
} else {
    document.write("Valores no reconocidos.")
}