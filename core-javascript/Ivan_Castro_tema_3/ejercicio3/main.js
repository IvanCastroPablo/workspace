//Creación de la Clase.
class Pan {
    constructor(nombre, name, precio) {
        this.nombre = nombre;
        this.name = name;
        this.precio = precio;
    }
};

//Creación de objetos de la clase Pan
let barra = new Pan("barra", "baguette", 1.2);
let txapata = new Pan("txapata", "ciabatta", 1,5);
let cabezon = new Pan("cabezón", "large loaf", 2.5);
let centeno = new Pan("pan de centeno", "rye bread", 2);

//Creando global vars para que sean accesibles en todo el script
let idioma;
let producto;
let panSeleccionado;

//Envuelve todo el script en una función para permitir detener la ejecución con "return".
function obtenerIdioma() {
    //Obtener el idioma del usuario.
    idioma = prompt("Si quieres ser atendido en español escriba 'es'. To be assisted in english, type 'en'.").toLowerCase();

    //Objener el producto seleccionado.
    switch (idioma) {
        case "es":
            producto = parseInt(prompt("Si quiere una barra, pulse 1; para una txapata 2; para un cabezón, 3; y para un pan de centeno, 4."));
            break;
        case "en":
            producto = parseInt(prompt("For a baguette type 1; for ciabatta, 2; for a large loaf, 3; and for a rye bread, 4."));
            break;
        default:
            alert("Idioma no soportado. Supported language not available.");
            return;//Detiene la exe si el idioma no es válido
        }
    return 0;
};

//Otra función para permitir return
function asociarInput() {
    // Asocia el input del usuario con un objeto de Pan
    switch (producto) {
        case 1:
            panSeleccionado = barra;
            break;
        case 2:
            panSeleccionado = txapata;
            break;
        case 3:
            panSeleccionado = cabezon;
            break;
        case 4:
            panSeleccionado = centeno;
            break;
        default:
            if (idioma == "es") {
                alert("No tenemos ese producto, que tenga un buen día.");
                return; //Detiene la exe si el producto no es válido
            } else {
                alert("We do not have that product, have nice day.");
                return; //Detiene la exe si el producto no es válido
            }
    }
    return 0;
};

function entregarProducto() {
    //Switch block para ofrecer el producto en el idioma correcto.
    switch (idioma) {
        case "es":
            alert(`Aqui tiene su ${panSeleccionado.nombre}. Serán ${panSeleccionado.precio} euros. ¡Que tenga un buen día!`);
            break;
        case "en":
            alert(`Here's your ${panSeleccionado.name}. It will be ${panSeleccionado.precio} euros. Have a nice day!`);
            break;
        default:
            alert("MIGHTY ERROR.");
    }
};

//bloque if para ejecutar las funciones adecuadamente
if (obtenerIdioma() === 0) {
    if (asociarInput() === 0) {
        entregarProducto();
    }
};
