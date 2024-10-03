// Preguntar un número por input, después, imprimir todos los números impares hasta él

let valor = parseInt(prompt("¡Escoge un número! (tampoco te pases de gordo)"));

function imprimirImpares() {
    let ristraDeNumeros = "";

    for (let i = 1; i < valor; i++) {
        if (i % 2 == 1) {
            ristraDeNumeros += (`${i}, `);
        } else {
            continue;
        }
    }
    ristraDeNumeros += ("FIN DE LA RISTRA DE IMPARES :D")
    document.write(ristraDeNumeros);
}


if (!isNaN(valor) && valor < 1000) {
    imprimirImpares();
} else if (!isNaN(valor) && valor > 1000){
    alert("Te pasaste con el numerito");
} else {
    alert("Te pedí un número, no una paella.");
}