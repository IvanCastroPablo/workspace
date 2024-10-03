function valorDimensiones() {
    let dimensiones = prompt("Pulsa 1 para un rombo pequeño, 2 para uno mediano o 3 para uno grande.");

    if (dimensiones == 1) {
        return 10;
    } else if (dimensiones == 2) {
        return 20;
    } else if (dimensiones == 3) {
        return 40;
    } else {
        alert("Medidas no contempladas. Adiós.");
        return null;
    }
}

function imprimirRombo(tamano) {
    let mitad = Math.floor(tamano / 2);  // Punto medio del rombo

    // Parte superior del rombo
    for (let i = 0; i <= mitad; i++) {
        let espacios = " &nbsp; ".repeat(mitad - i);  // Espacios a la izquierda
        let caracteres = "8".repeat(i * 2 + 1);  // Aumentar el número de caracteres en cada fila
        document.write(espacios + caracteres + "<br>");
    }

    // Parte inferior del rombo
    for (let i = mitad - 1; i >= 0; i--) {
        let espacios = " &nbsp; ".repeat(mitad - i);  // Espacios a la izquierda
        let caracteres = "8".repeat(i * 2 + 1);  // Disminuir el número de caracteres en cada fila
        document.write(espacios + caracteres + "<br>");
    }
}

// Llamar a la función con un tamaño definido (ej: 7 filas)
let tamano = valorDimensiones();
if (tamano) {
    imprimirRombo(tamano);
}
