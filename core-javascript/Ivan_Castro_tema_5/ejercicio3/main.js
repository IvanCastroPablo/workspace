function introducir_valor() {
    valor = document.getElementById("temperatura").value;
    if (!isNaN(valor) && valor !== '') {
        valor = parseFloat(valor);
        return valor;
    } else {
        document.getElementById("resultado").textContent = "Valores no permitidos. Por favor, introduce un número válido.";
        return null;
    }
}

function far_to_cel(valor) {
    return ((valor - 32) / 1.8).toFixed(2);
}

function cel_to_far(valor) {
    return ((valor * 1.8) + 32).toFixed(2);
}

function simultaneo(valor) {
    let valorFahrenheit = (valor * 1.8) + 32;
    let valorCelsius = (valor - 32) / 1.8;
    return `Si quería convertir ${valor} Celsius a Fahrenheit: ${valorFahrenheit.toFixed(2)} Fahrenheit. Si quería convertir ${valor} Fahrenheit a Celsius: ${valorCelsius.toFixed(2)} Celsius.`;
}

function seleccion() {
    let selector = parseInt(document.getElementById("conversion").value);
    let valor = introducir_valor();

    if (valor !== null) {
        if (selector === 1) {
            document.getElementById("resultado").textContent = `${valor} Fahrenheit son igual a ${far_to_cel(valor)} Celsius.`;
        } else if (selector === 2) {
            document.getElementById("resultado").textContent = `${valor} Celsius son igual a ${cel_to_far(valor)} Fahrenheit.`;
        } else if (selector === 3) {
            document.getElementById("resultado").textContent = simultaneo(valor);
        }
    }
}

module.exports = {
    far_to_cel,
    cel_to_far,
    simultaneo
};