//Leyendo archivos de forma síncrona


const fs = require("node:fs")

//Primer archivo
console.log("leyendo el primer archivo...")

const text = fs.readFileSync("./archivo.txt", "utf-8")

console.log(text)

//evidencia de sincronía
console.log("Intentando hacer cosas mientras lee el archivo")


//Segundo archivo
console.log("leyendo el segundo archivo...")

const text2 = fs.readFileSync("./archivo2.txt", "utf-8")

console.log(text2)