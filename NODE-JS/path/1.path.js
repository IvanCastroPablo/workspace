const path  = require("node:path")


// barra separadora de carpetas según OS
console.log(path.sep)

// unir rutas con path.join
const filePath = path.join("content", "subfolder", "text.txt")

console.log(filePath)

// devuelve el final de la ruta
const base = path.basename("./laruta/quesea/archivosecreto.txt")
console.log(base) // ---> archivosecreto.txt

// devuelve el final de la ruta, quitando lo que quieras con el segundo argumento
const sinextension = path.basename("./laruta/quesea/archivosecreto.txt", ".txt")
console.log(sinextension) // ---> archivosecreto


// para obtener solamente la extensión
const extension = path.extname("image.jpg")
console.log(extension)