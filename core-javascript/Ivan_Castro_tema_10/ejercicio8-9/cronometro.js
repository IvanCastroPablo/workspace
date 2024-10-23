/* 
8. Crea un cronómetro en una página web (muy simple, sólo minutos y segundos)

9. Sobre el ejercicio anterior, haz que con el click del ratón se pueda parar o continuar el tiempo. (No hace falta controlar el momento en el que se para el tiempo a la hora de volver a empezar)
*/

let validador = true;
let horas = 0; minutos = 0; segundos = 0;
let intervalo;

async function avanzar_tiempo() {
    segundos ++;
    if (segundos == 60) {
        segundos = 0;
        minutos ++;
    }
    if (minutos == 60) {
        minutos = 0;
        horas ++;
    }
}

function parar() {
    validador = !validador;
}

function actualizar() {
    return { horas, minutos, segundos };
}

function reiniciar() {
    validador = false;
    clearInterval(intervalo);
    intervalo = null;
    segundos = minutos = horas = 0;
    actualizar();  
}

function iniciar() {
    validador = true;
    if (!intervalo) {
        intervalo = setInterval(function () {
            if (validador) {
                avanzar_tiempo();
                actualizar();
            }
        }, 1000);
    }
}

module.exports = { 
    iniciar, 
    parar, 
    reiniciar, 
    actualizar, 
    validador,
    horas,
    minutos,
    segundos,
};

// COSAS QUE NO SE TESTEAN

function actualizarDOM() {
    document.getElementById("segundos").value = String(segundos).padStart(2, '0');
    document.getElementById("minutos").value = String(minutos).padStart(2, '0');
    document.getElementById("horas").value = String(horas).padStart(2, '0');
}

function iniciarCronometro() {
    iniciar();
    setInterval(function () {
        if (validador) { 
            actualizarDOM(); 
        }
    }, 1000);
}

function reiniciarDOM() {
    reiniciar();
    actualizarDOM();
}
