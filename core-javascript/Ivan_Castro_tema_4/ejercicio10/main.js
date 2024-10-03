// Preguntar por pantalla que se introduzca un número o un texto, si es número se buscan todos los divisores del mismo y si es texto se escribe cada uno de los caracteres en un salto de línea.

let valor;

function preguntarUsuario() {
    valor = prompt("Introduzca un número o un texto.");
    return 1;
}

function divisores() {
    let column= (`Los divisores de ${valor} son los siguientes:<br><br> `);
    for (let i = 1; i < valor; i++) {
        if (valor % i == 0) {
            column += (`${i}<br>`);
        } else {
            continue;
        }
    } 
    document.write(column);
}

function textoVertical() {
    let vertical = (`El texto ${valor} en vertical:<br><br>`);
    for (let i = 0; i < valor.length; i++) {
        vertical += (`${valor[i]}<br>`);
    } 
    document.write(vertical);
}

if (preguntarUsuario() == 1 && valor != undefined) {
    if (isNaN(valor)) {
        textoVertical();
    } 
    else if (valor.trim() == "") {
        document.write("Ningún valor útil proporcionado.");
    }
    else {
        divisores();
    }
}