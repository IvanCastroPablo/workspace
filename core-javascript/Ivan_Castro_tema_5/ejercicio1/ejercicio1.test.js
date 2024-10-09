const { fibonacci } = require("./ejercicio1");

test("Debe retornar los valores de la secuencia (comprobados índice 10, 50, 69 y 0", () => {
    const resultadoEsperado1 = 55n;
    const resultadoEsperado2 = 12586269025n;
    const resultadoEsperado3 = 117669030460994n;
    const resultadoEsperado4 = 0n;

    expect(fibonacci(10)).toEqual(resultadoEsperado1);
    expect(fibonacci(50)).toEqual(resultadoEsperado2);
    expect(fibonacci(69)).toEqual(resultadoEsperado3);
    expect(fibonacci()).toEqual(resultadoEsperado4);


});

