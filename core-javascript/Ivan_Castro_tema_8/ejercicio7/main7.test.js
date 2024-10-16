/*
TEST PARA OBJETO Y SUS MÉTODOS
*/

const { Trans_string } = require("./main7.js");

test("Convertir string vacío a array", () => {
    const trans = new Trans_string("");
    trans.convertir_a_array();
    expect(trans.array).toEqual([]);
});

test("Aleatorizar string con un solo carácter", () => {
    const trans = new Trans_string("a");
    trans.aleatorizar_string();
    expect(trans.string).toBe("a");
});

test("Invertir string con un solo carácter", () => {
    const trans = new Trans_string("b");
    trans.invertir_string();
    expect(trans.string).toBe("b");
});

test("Quitar vocales de string con solo consonantes", () => {
    const trans = new Trans_string("bcdfgh");
    trans.quitar_vocales();
    expect(trans.string).toBe("b c d f g h");
});

test("Quitar consonantes de string con solo números y caracteres especiales", () => {
    const trans = new Trans_string("123!@#");
    trans.quitar_consonantes();
    expect(trans.string).toBe("1 2 3 ! @ #");
});

test("Invertir palabras con espacios múltiples", () => {
    const trans = new Trans_string("Hola   mundo  cruel");
    trans.invertir_palabras();
    expect(trans.string).toBe("cruel mundo Hola");
});

test("Convertir string con caracteres especiales y números a array", () => {
    const trans = new Trans_string("abc123!@#");
    trans.convertir_a_array();
    expect(trans.array).toEqual(['a', 'b', 'c', '1', '2', '3', '!', '@', '#']);
});
