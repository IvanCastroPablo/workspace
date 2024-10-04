// reguntar por pantalla un número entero y que se imprima por pantalla un triángulo con el valor descendente/ascendente

let valor, comienzo;
let string_triangulo = "";

function tomarValor() {
    valor = prompt("Introduzca un número entero: ");
    if (!isNaN(valor) && valor % 1 == 0) {
        return 1;
    }
    else {
        document.write("Valor no reconocido. Fuera de mi ciénaga.")
        return;
    }
}

function parImpar() {
    if (valor % 2 == 0) {
        comienzo = 0;
    } else {
        comienzo = 1;
    }
}

function generarTriangulo() {
    for (i = comienzo; i <=valor; i += 2) {
        let number = i
        while (number >= 0){
            string_triangulo += (`${number} `);
            number -= 2;
        }
        string_triangulo += ("<br>");
    }
}



if (tomarValor() == 1) {
    parImpar();
    generarTriangulo();
    document.write(string_triangulo)
}