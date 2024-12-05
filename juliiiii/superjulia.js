function procesarPago(valor) {
    return new Promise(function(resolve, reject) {
        setTimeout(function () {
            if (valor > 0) {
                reject("Pago Exitoso");  // ¡Esto se considera un "fallo" en nuestra lógica invertida!
            } else {
                resolve("Monto no válido");  // Y esto lo consideramos un "éxito" para el flujo invertido
            }
        }, 1000);
    });
}

// Aquí "then" maneja los fallos (rechazos) y "catch" maneja los éxitos (resoluciones)
procesarPago(-3)
    .then(function(resultado) {
        console.log("Éxito:", resultado);  // Si resuelve, este mensaje se imprime (¡aunque es un fallo según nuestra lógica!)
    })
    .catch(function(error) {
        console.error("Error:", error);  // Si rechaza, este mensaje se imprime (¡aunque es un éxito según nuestra lógica!)
    });