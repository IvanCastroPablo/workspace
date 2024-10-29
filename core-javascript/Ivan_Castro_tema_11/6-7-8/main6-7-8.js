/*
6. Pide información con fetch a la url: https://jsonplaceholder.typicode.com/posts/1. Loguea el status de la petición e imprime por pantalla el contenido del artículo que has recibido.
7. Modifica el ejercicio anterior o crea uno nuevo que permita cambiar el número del artículo que se recibe.
8. Modifica el ejercicio anterior y recibe la lista de todos los artículos. ¿Cuántos hay? ¿Podrías listar los títulos? ¿Y hacer una tabla con los títulos y los contenidos?
*/

let web = `https://jsonplaceholder.typicode.com/posts/`

async function getResponse(id) {
    let selected_web = await fetch(web +`${id}`);
    console.log(selected_web.status);
    
    let data = await selected_web.json();
    console.log(data);
}


function mostrarTitulo(articulo) {
    console.log('Título', articulo.title);
}


function crearFilaTabla(articulo) {
    return {
        Título: articulo.title,
        Contenido: articulo.body
    };
}


async function ejercicio8(selection) {
    let selected_web = await fetch(web);
    let data = await selected_web.json();

    if (selection == 1) {
        let numero_titulos = data.length;
        console.log('Número de artículos:', numero_titulos);
    } else if (selection == 2) {
        data.forEach(mostrarTitulo);
    } else {
        console.table(data.map(crearFilaTabla));
    }
}

// Ejercicio 6 y 7) la función getResponse(id) responde a los requerimientos de ambos ejercicios.
// Ejercicio 8) Para obtener el número de artículos, parámetro 1, para listar todos los títulos, 2. Para una tabla con todos los contenidos, 3.

module.exports = {
    getResponse,
    mostrarTitulo,
    crearFilaTabla,
    ejercicio8
}