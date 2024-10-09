const { far_to_cel, cel_to_far, simultaneo } = require("./main");

test("Convertir Fahr a Cel", () => {
    let valorFahr = 32;
    let resultadoEsperado = "0.00";
    expect(far_to_cel(valorFahr)).toBe(resultadoEsperado);
});

test("Convertir Cel to Fahr", () => {
    let valorCel = 0;
    let resultadoEsperado = "32.00";
    expect(cel_to_far(valorCel)).toBe(resultadoEsperado);
});

test("Convertir simultáneo", () => {
    let valor = 100;
    let resultadoEsperado = "Si quería convertir 100 Celsius a Fahrenheit: 212.00 Fahrenheit. Si quería convertir 100 Fahrenheit a Celsius: 37.78 Celsius.";
    expect(simultaneo(valor)).toBe(resultadoEsperado);
})