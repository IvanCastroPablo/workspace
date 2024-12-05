const os = require("node:os");


console.log("Nombre del sistema operativo", os.platform());

console.log("Versión del OS", os.release());

console.log("Arquitectura", os.arch());

console.log("CPUs", os.cpus());

console.log("Memoria libre", os.freemem()/ 1024 /1024);

console.log("Memoria total", os.totalmem() / 1024 / 1024);


console.log("Uptime en horas", os.uptime() / 60 / 60)