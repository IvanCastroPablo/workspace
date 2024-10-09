const saludando = require("./main");

test("Debe devolver una string específica", () => {
    const resultadoEsperado = "<h1>HOLA DAVID</h1>";

    expect(saludando()).toEqual(resultadoEsperado);
});
