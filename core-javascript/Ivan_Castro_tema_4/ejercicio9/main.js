// Preguntar un número de números a introducir, después, preguntar por esos números, por último, sacar por pantalla la suma de los mismos.

function preguntarNumero() {
    let numero = parseFloat(prompt("¿Cuántos números quieres sumar? "));
    return numero;
}

function preguntarCifras() {
    let listaCifras =[]
    for (let i = 0; i < numero; i++){
        cifra = parseFloat(prompt("Añade cifra: "));
        if (!isNaN(cifra)) {
            listaCifras.push(cifra);
        } else {
            alert("Valor no reconocido. Agur.")
            return;
        }
    } return listaCifras
}

function sumaCifras(a) {
    let suma = a.reduce(function(acumulador, valorActual) {
        return acumulador + valorActual;
    }, 0);
}

if (typeof preguntarNumero() == "number") {
    if ((Array.isArray(preguntarCifras()) == "true")) {
        sumaCifras(listaCifras)
    } 
}