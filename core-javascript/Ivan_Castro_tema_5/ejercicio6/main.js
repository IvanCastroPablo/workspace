// Pedir que se introduzca un número de dni, después, calcular si el dni es verdadero o no en función de su formato y el número de dígitos.

function validador(numero, letra) {
    let alpha;
    let resto = numero % 23;
    switch (resto) {
        case 0: alpha = "T"; break;
        case 1: alpha = "R"; break;
        case 2: alpha = "W"; break;
        case 3: alpha = "A"; break;
        case 4: alpha = "G"; break;
        case 5: alpha = "M"; break;
        case 6: alpha = "Y"; break;
        case 7: alpha = "F"; break;
        case 8: alpha = "P"; break;
        case 9: alpha = "D"; break;
        case 10: alpha = "X"; break;
        case 11: alpha = "B"; break;
        case 12: alpha = "N"; break;
        case 13: alpha = "J"; break;
        case 14: alpha = "Z"; break;
        case 15: alpha = "S"; break;
        case 16: alpha = "Q"; break;
        case 17: alpha = "V"; break;
        case 18: alpha = "H"; break;
        case 19: alpha = "L"; break;
        case 20: alpha = "C"; break;
        case 21: alpha = "K"; break;
        case 22: alpha = "E"; break;
        default: alpha = "#";
        }
    if (letra.toUpperCase() == alpha) {
        return 1;
    } else {
        return null;
    }
}

function introducir_dni() {
    let dni = document.getElementById("DNI").value;
    let regex = /^\d{8}[A-Za-z]$/;
    let numero, letra;

    if (!regex.test(dni)) {
        alert("Por favor, ingresa valores válidos.");
        return null;
    } else {
        numero = dni.substring(0,8);
        letra = dni[8]
        if (validador(numero, letra) == 1) {
            document.getElementById("resultado").textContent = "DNI válido";
        } else {
            document.getElementById("resultado").textContent = "DNI no válido";
        }
    }
}

module.exports = { 
    validador
};

// NODE TEST:
// Ten en cuenta que la validación de estructura de 8 dígitos + letra ya 
// la he hecho con una regex ( /^\d{8}[A-Za-z]$/ ),
// cosa que directamente ni contemplo testear en jest

console.log(validador(72686323, "K")) //---> 1 (válido)
console.log(validador(72686323, "Ñ")) //---> null (no válido)