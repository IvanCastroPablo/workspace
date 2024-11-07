// Preguntar al usuario que escriba un texto, después que lo muestre de manera invertida (al revés)

texto = prompt("Escribe el texto que quieras invertir: ");
texto_invertido = "";
decreciente = texto.length
document.write(`El texto a invertir es <strong>${texto}</strong><br>`)
for (decreciente; decreciente > 0; decreciente--) {
    texto_invertido += texto[decreciente -1];
}

document.write(texto_invertido);


frase -= frase[frase.length]