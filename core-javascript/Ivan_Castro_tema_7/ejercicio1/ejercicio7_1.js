//Cuando defines un array copiándolo con el método spread en otro array, ¿modificar el segundo modifica el primero? ¿modificar el primero modifica el segundo?

let array_original = [1, 2, 3];

let array_copia = spread(array_original);

console.log(array_copia)