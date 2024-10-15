// Crea un programa que pida un valor de tamaño de array por input y después el número del cuál se van a obtener múltiplos y devuelva un array con el tamaño puesto de múltiplos de ese número (2, 4 => [4, 8])

let array = [];
let multiplicando, longitud;

function modificar_array(array, multiplicando) {
    for (let i = 0; i < array.length; i++) {
        array[i] = (` ${((i + 1) * multiplicando).toFixed(2)}`);
    }
}

function obtener_array() {
    longitud = parseInt(document.getElementById("longitud").value);
    for (let i = 1; i <= longitud; i++) {
        array.push(i);
    } 
    return 1;
}

function obtener_multiplicando() {
    multiplicando = parseFloat(document.getElementById("multiplicando").value);
    return 1;
}

function iniciar() {
    array = [];  // Asegúrate de limpiar el array en cada inicio
    if (obtener_array() === 1 && obtener_multiplicando() === 1) {
        modificar_array(array, multiplicando);
        if (array.length !== 0) {
            document.write(`Array de ${longitud} índices de longitud multiplicando el ${multiplicando}: `)
            document.write(array)
        } else {
            document.write("El array no puede mostrarse porque tiene longitud nula.")
        }
    }
}

module.exports = {
    modificar_array,
}


// NODE TEST:

array = [1, 2, 3, 4, 5]; // inicializo el array porque si no va a petar. Pasa lo mismo en jest.
modificar_array(array, 5);
console.log(array); // array = [ ' 5', ' 10', ' 15', ' 20', ' 25' ];

array = [];
modificar_array(array, 5);
console.log(array); // []

array = [1, 2, 3, 4, 5];
modificar_array(array, 0);
console.log(array); // [ ' 0', ' 0', ' 0', ' 0', ' 0' ]