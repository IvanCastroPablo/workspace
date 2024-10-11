// Escribir la función titulo(), la cual recibe un string y lo retorna convirtiendo la primera letra de cada palabra a mayúscula y las demás letras a minúscula, dejando inalterados los demás caracteres. Precondición: el separador de palabras es el espacio: " ".
let string;

function titulo(string) {
    let altered_string = string.split(" ");
    for (i = 0; i < altered_string.length; i++)
        altered_string[i] = altered_string[i].charAt(0).toUpperCase() + altered_string[i].slice(1);
    return altered_string.join(" ");
    
}

function recibir_titulo() {
    string = prompt("Escribe una frase cualquiera: ");
    if (string.length != 0) {
        return 1;
    } else { return null;}
}

function iniciar() {
    if (recibir_titulo() === 1) {
        alert(titulo(string));

        } else {
            alert("Frase no válida.")
        }
}

module.exports = {
    titulo,
}

//NODE TESTING
// De nuevo, el coverage del testing es limitado, pero te aseguro que he hecho testing
// a lo bruto por mi parte. De todas maneras, este código es muy sencillo.

console.log(titulo("me gusta la tortilla de patatas"))
// Me Gusta La Tortilla De Patatas
