// Dibujar un cuadrado por pantalla

let dimensiones;

// Determina el tamaño del cuadrado por prompt
function valorDimensiones() {
    dimensiones = prompt("Pulsa 1 para un cuadrado pequeño, 2 para uno mediano o 3 para uno grande.");

    if (dimensiones == 1) {
        return 5;
    } else if (dimensiones == 2) {
        return 10;
    } else if (dimensiones == 3) {
        return 20;
    } else {
        alert("Medidas no contempladas. Adiós.");
        return null;
    }
}

// función recursiva para imprimir el cuadrado
function imprimirCuadrado(tamano, tamanoOriginal){
    if (tamano === 1) {
        return 1;
    } else {
        let linea = "";
        for (let j = 0; j < tamanoOriginal -1; j++) {
            linea += "% ";
        }
        document.write(linea + "<br>");
        imprimirCuadrado(tamano -1, tamanoOriginal);
    }
}

// Llamando a la función primera y dándole su valor a una variable
let tamano = valorDimensiones()

// Si la línea anterior va bien, ejecuta el resto del código
if (tamano) {
    imprimirCuadrado(tamano, tamano);
}