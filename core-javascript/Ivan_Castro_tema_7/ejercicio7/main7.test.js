/*
TEST PARA ARRAYS
*/

const { modificar_array } = require("./main7.js");


test("Probando array normal", () => {
    const array = [1, 2, 3, 4, 5];
    modificar_array(array, 5)
    expect(array).toEqual([ ' 5', ' 10', ' 15', ' 20', ' 25' ])
});

test("Probando array vacío", () => {
    const array = [];
    modificar_array(array, 5);
    expect(array).toEqual([]); 
});

test("Probando array con números negativos", () => {
    const array = [-1, -2, -3, -4, -5];
    modificar_array(array, -3);
    expect(array).toEqual([' -3', ' -6', ' -9', ' -12', ' -15']); 
});

test("Probando array con multiplicando 0", () => {
    const array = [1, 2, 3, 4, 5];
    modificar_array(array, 0);
    expect(array).toEqual([' 0', ' 0', ' 0', ' 0', ' 0']); 
});

test("Probando longitud no numérica", () => {
    const array = [];
    longitud = NaN; 
    modificar_array(array, 5);
    expect(array).toEqual([]); 
});
