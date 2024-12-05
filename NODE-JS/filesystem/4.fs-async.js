//Leyendo archivos de forma asíncrona
const fs = require("node:fs")

//Primer archivo
console.log("leyendo el primer archivo...")

const text = fs.readFile("./archivo.txt", "utf-8", function (err, text){
    console.log("primer archivo:", text)
})


//evidencia de asincronía (¿ves? Se imprime antes de devolver los textos!)
console.log("Intentando hacer cosas mientras lee el archivo")


//Segundo archivo
console.log("leyendo el segundo archivo...")

const text2 = fs.readFile("./archivo2.txt", "utf-8", function (err, text2){
    console.log("segundo archivo:", text2)
})
