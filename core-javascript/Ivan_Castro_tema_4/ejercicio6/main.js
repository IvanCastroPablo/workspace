//Generar variables
let multiplicando;

//Prompting
function ofrecerTabla() {
    // Me ASEGURO que el input sea un número...
    let valor = prompt("¿De qué número quieres la tabla de multiplicar?");
    multiplicando = Number(valor);

    // Verificamos si el valor ingresado es un integer y está  entre 0 y 9
    if (Number.isInteger(multiplicando) && multiplicando >= 0 && multiplicando < 10) {
        return 1;
    } else {
        alert("¡Lo siento! No conozco la tabla de multiplicar de eso...");
        return;
    }
}

//Generar tabla de multiplicar
function imprimirTablas() {
    for (let i = 0; i <= 10; i++) {
        document.write(`${multiplicando} x ${i} = ${multiplicando * i}<br>`)
    }
}

//bloque if para ejecutar las funciones adecuadamente
if (ofrecerTabla() === 1) {
    imprimirTablas()
}
