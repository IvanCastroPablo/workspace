// Funcion que suma 2 + 2
function sumar() {
    return 2 + 2;
}

// Funcion que comprueba el resultado de la funcion sumar
function comprobarSuma() {
    const resultado = sumar();
    if (resultado === 4) {
        console.log("La suma es correcta.");
    } else {
        console.log("La suma es incorrecta.");
    }
}

console.log("El archivo JavaScript ha sido cargado correctamente.");
document.body.innerHTML += "<p>El archivo JavaScript ha sido cargado correctamente.</p>";


// Llamada a la funcion de comprobacion
comprobarSuma();
