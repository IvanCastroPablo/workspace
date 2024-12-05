function rombo(size) {
    let espacio = "";
    let caracter = "%";
    
    // espacios
    for (z = 0; z < size; z ++) {
        espacio += " ";
    }
    // parte de arriba
    for (z = 0; z < size; z ++) {
        console.log(espacio, caracter)
        espacio = espacio.slice(0, -1);
        caracter += "%%";
    }
    // parte de abajo
    for (z = 0; z < size; z ++) {
        console.log(espacio, caracter);
        espacio += " ";
        caracter = caracter.slice(0, -2);
    }
    // puntica
    console.log(espacio, caracter);
}

rombo(6)


