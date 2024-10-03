// Constantes para la lógica de la función
const respuesta1 = prompt("¿Cuál es la capital de Italia?").toLowerCase();
const respuestaCorrecta1 = "roma";
const respuesta2 = prompt("¿En qué año se disolvió la Unión Soviética?");
const respuestaCorrecta2 = 1991


// Comparando el input con las const
function validarpreguntas(){
    if (respuesta1 == respuestaCorrecta1 && respuesta2 == respuestaCorrecta2) {
        alert("¡Correcto! Has respondido bien a ambas preguntas.");
        document.write("¡GANADOR!")
    }
    else if (respuesta1 == respuestaCorrecta1 || respuesta2 == respuestaCorrecta2) {
        alert("Una de las dos respuestas es correcta. No eres del todo tonto.")
        document.write("No me has dejado impresionado...")
    }
    else {
        alert("Incorrecto. Ambas respuestas son incorrectas.");
        document.write("¡PERDEDOR!")
    }
}

// Llamando a la función
validarpreguntas()
