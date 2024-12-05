//Leyendo archivos de forma asíncrona, y promesas
const fs = require("node:fs")
const { promisify } = require("node:util")

const readFilePromise = promisify(fs.readFile)


//Primer archivo
console.log("leyendo el primer archivo...")

const text = readFilePromise("./archivo.txt", "utf-8")
    .then(function(text) {
        console.log("primer texto", text)
    })


//evidencia de asincronía (¿ves? Se imprime antes de devolver los textos!)
console.log("Intentando hacer cosas mientras lee el archivo")


//Segundo archivo
console.log("leyendo el segundo archivo...")

const text2 = readFilePromise("./archivo2.txt", "utf-8")
    .then(function(text2) {
        console.log("segundo texto", text2)
    })