// Página web ejecutada en bucle infinito que pregunta por una multiplicación y te responde con la solución mientras te vuelve a preguntar de nuevo.

function multiplicacionRecursiva() {
    let multiplicando = parseFloat(prompt("Proporciona multiplicando"));  // Convertir a número
    let multiplicador = parseFloat(prompt("Proporciona multiplicador"));

    // Verificamos si ambos valores son números válidos
    if (!isNaN(multiplicando) && !isNaN(multiplicador)) {
        alert(`${multiplicando} x ${multiplicador} = ${multiplicando * multiplicador}`);
        multiplicacionRecursiva();  // Llamada recursiva
    } else {
        alert("Por favor, introduce números válidos.");
        multiplicacionRecursiva();  // Reintentar
    }
}

multiplicacionRecursiva();