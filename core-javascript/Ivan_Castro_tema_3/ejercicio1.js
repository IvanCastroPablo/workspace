// ¿Se puede escribir un switch como un bloque de if?

// Sin duda se puede:

let car = "Mustang";

if (car === "Mustang") {
    console.log("Fast as hell!");
} else if (car === "Citroen") {
    console.log("Not as nice...");
} else {
    console.log("Not known car.");
}

switch (car) {
    case "Mustang":
        console.log("Fast as hell!");
        break;
    case "Citroen":
        console.log("Not as nice...");
        break;
    default:
        console.log("Not known car.");
}

/*

Ventajas y desventajas:

Switch: generalmente más compacto si hay varias condiciones que se basen en el mismo valor. Si el número de condiciones es muy alto es ligeramente más eficiente que "if/else".

If/else: es un bloque más flexible a la hora de poner condiciones complejas que no se basen en igualdad. Personalmente, me resulta más fácil de leer y de escribir.

*/