//Generar variables
let diametro, grosor;

//Prompting
function obtenerMedidas() {
    diametro = parseFloat(prompt("Introduzca el diámetro de su rueda en metros: "));
    grosor = parseFloat(prompt("Introduzca el grosor de su rueda en metros: "));
    
    if (diametro > 0 && grosor > 0) {
        return 1;
    } else {
        alert("Medidas inválidas. Que tenga un buen día.");
        return;
    }
}

//Obtener mensaje de tallaje de rueda
function determinarTalla() {
    if (diametro > 1.4) {
        alert("La rueda es para un vehículo grande");
    } else if (diametro <= 1.4 && diametro > 0.8) {
        alert("La rueda es para un vehículo mediano");
    } else if (diametro <= 0.8) {
        alert("La rueda es para un vehículo pequeño");
    } else {
        alert("Medida no reconocida. Tenga un buen día.");
        return;
    }
    return 1;
}

//bloque if para ejecutar las funciones adecuadamente y alertar de si las medidas no son adecuadas.
if (obtenerMedidas() === 1 && determinarTalla() === 1) {
    if ((diametro > 1.4 && grosor < 0.4) || (diametro <= 1.4 && diametro > 0.8 && grosor < 0.25)) {
        alert("El grosor para esta rueda es inferior al recomendado.");
    } else {
        alert("El grosor es adecuado para esta rueda.");
    }
}
