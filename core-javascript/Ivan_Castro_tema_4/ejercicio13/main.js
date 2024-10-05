//Escribir un programa que muestre el eco de todo lo que el usuario introduzca hasta que el usuario escriba “salir” que terminará.

let texto;

while (true) {
    texto = prompt("Soy el eco de tus palabras...")
    if (texto != "salir") {
        alert(texto);
    } else {
        break;
    }
}