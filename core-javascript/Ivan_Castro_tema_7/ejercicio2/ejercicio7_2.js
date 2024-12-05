// Cuando defines un array de tamaño 4, ¿puedes asignar un valor al índice 26?

let myArray = [1, 2, 3, 4];

myArray[26] = "test";

console.log(myArray); // ---> [ 1, 2, 3, 4, <22 empty items>, 'test' ]

console.log(myArray[20]) // ---> undefined

// Sí, se puede. Los índices vacíos quedan como "undefined".