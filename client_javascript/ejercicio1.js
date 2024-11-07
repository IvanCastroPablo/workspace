// 1. Cambie el título de la página.

document.title = "Qué listo soy yo";

// Cambiar colores de la página
document.body.style.backgroundColor = "#bdd2ea";

// Cambiar el color de todos los textos en párrafos, encabezados, etc.
document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, span, a").forEach(el => {
    el.style.color = "blue";
});

const imagenes = document.getElementsByTagName("img");
for (let img of imagenes) {
    img.style.filter = "hue-rotate(240deg)";
}

// Añadir un nuevo elemento al DOM
let navbarBg = document.querySelector(".navbar-bg.container-fluid");
if (navbarBg) {
    navbarBg.insertAdjacentHTML("afterend", "<p style='font-size: 4em; color: black; white-space: pre-wrap;'>\nNuevo elemento en el DOM</p>");
}


let miEtiqueta = document.createElement("p");
// Insertar el nuevo párrafo al inicio del elemento destino
navbarBg.prepend(miEtiqueta); 