document.body.style.background = "red";


function wiki(){
    alert(location.href); // muestra la URL actual
    if (confirm("Ir a wikipedia?")) {
    location.href = "https://wikipedia.org"; // redirigir el navegador a otra URL
    }
}

setTimeout(wiki, 1000)