// Pedirle al usuario que ingrese un dígito y un número, después llamar a una función que diga el número de veces que aparece el dígito en el número.

function contar_digito(digito, numero) {
    let instancias_digito = 0;
    numero  = numero.toString(); // Lo paso a string para length e indexing

    for (let i = 0; i < numero.length; i++) {
        if (numero[i] == digito) {
            instancias_digito++;
        }
    } 
    return instancias_digito;
}

function escoger_digito(digito) {
    if (!isNaN(digito) && digito.length === 1){
        return digito;
    } else {
        return null;
    }
}

function escoger_numero(numero) {
    if (!isNaN(numero) && numero !== "") {
        return numero;
    } else {
        return null;
    }
}

function seleccion() {
    let digito = escoger_digito(document.getElementById("Digito a contar").value);
    let numero = escoger_numero(document.getElementById("Numero a examinar").value);

    if (digito === null || numero === null) {
        alert("Por favor, ingresa valores válidos.");
        return null;
    }   

    let instancias_digito = contar_digito(digito, numero);
    
    document.getElementById("resultado").textContent = `El dígito ${digito} aparece ${instancias_digito} veces en el número ${numero}.`;
}

module.exports = { 
    contar_digito, 
    escoger_digito, 
    escoger_numero,
    seleccion 
};

// Node test:

console.log(contar_digito(1, 112)) // 2
// console.log(contar_digito(a, 112)) ---> error
// console.log(contar_digito(1, asdf)) ---> error
console.log(contar_digito(22, 112)) // 0, pero el programa entero avisa al user.

console.log(escoger_digito("1")) // ---> 1
console.log(escoger_digito("22")) // ---> null

console.log(escoger_numero("22")) // ---> 22
console.log(escoger_numero("asdf")) // ----> null