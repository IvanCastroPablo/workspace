let saludo;

function saludando(){
    saludo = "<h1>HOLA DAVID</h1>";
    return saludo;
}

function writing() {
    saludando();
    document.write(saludo)
}

module.exports = saludando

