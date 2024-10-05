//Generar variables
let diametro, grosor;

//Prompting, asegurando input correcto
function obtenerMedidas() {
    diametro = prompt("Introduzca el diámetro de su rueda en metros: ");
    grosor = prompt("Introduzca el grosor de su rueda en metros: ");
    
    if (diametro > 0 && grosor > 0 && !isNaN(diametro) && !isNaN(grosor)) {
        return 1;
    } else {
        document.write("Medidas inválidas. Que tenga un buen día.");
        return;
    }
}

//Obtener mensaje de tallaje de rueda
function determinarTalla() {
    if (diametro > 1.4) {
        document.write("La rueda es para un vehículo grande");
    } else if (diametro <= 1.4 && diametro > 0.8) {
        document.write("La rueda es para un vehículo mediano");
    } else {
        document.write("La rueda es para un vehículo pequeño");
    }
    return 1;
}

//bloque if para ejecutar las funciones adecuadamente y alertar de si las medidas no son adecuadas.
if (obtenerMedidas() === 1 && determinarTalla() === 1) {
    if ((diametro > 1.4 && grosor < 0.4) || (diametro <= 1.4 && diametro > 0.8 && grosor < 0.25)) {
        document.write(", pero el grosor para esta rueda es inferior al recomendado.");
    } else {
        document.write(" y el grosor es adecuado para esta rueda.");
    }
}
