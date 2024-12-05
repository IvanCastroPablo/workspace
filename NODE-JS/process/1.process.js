// process: es un objeto global

console.log(process.argv)


// nos saca la ruta desde la cual estamos ejecutando el archivo, y no la ruta del archivo:
console.log(process.cwd())

console.log(process.env.PEPITO);