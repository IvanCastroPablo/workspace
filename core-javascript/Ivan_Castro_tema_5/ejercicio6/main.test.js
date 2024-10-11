/*
TEST PARA VALIDAR DNIS
*/


const { validador } = require("./main");

test("Comprobando el conteo de dígitos", () => {
    expect(validador(72686323, 'K')).toBe(1);
    expect(validador(12365547, 'Ñ')).toBe(null);
    expect(validador(12345878, 'Z')).toBe(null);
});

