// Importamos las funciones y configuramos los mocks necesarios
const { getResponse, ejercicio8, mostrarTitulo, crearFilaTabla } = require("./main6-7-8.js");

// creando una web de coña
const mockweb = {
        status: 200,
        title: 'titulo prueba jest',
        body: 'cuerpo prueba jest',
};

// haciendo un mock de la función fetch
global.fetch = jest.fn().mockResolvedValue({
    status:200,
    json: jest.fn().mockResolvedValue([mockweb, mockweb])
});

test('imprimiendo título', () => {
    const consoleSpy = jest.spyOn(console, "log");
    
    mostrarTitulo(mockweb);

    expect(consoleSpy).toHaveBeenCalledWith('Título', 'titulo prueba jest');

    consoleSpy.mockRestore();
});

test("crear tabla", () => {
    const resultadoEsperado = {
        Título: "titulo prueba jest",
        Contenido: "cuerpo prueba jest"
    };

    expect(crearFilaTabla(mockweb)).toEqual(resultadoEsperado);
});

test("obteniendo Respuesta", async () => {
    const consoleSpy = jest.spyOn(console, "log");

    await getResponse(1);

    expect(consoleSpy).toHaveBeenCalledWith(200);
    expect(consoleSpy).toHaveBeenCalledWith(expect.arrayContaining([mockweb]));

    consoleSpy.mockRestore();
});


// Pruebas para ejercicio8
test("ejercicio8: selecciona 1 y muestra número de artículos", async () => {
    const consoleSpy = jest.spyOn(console, "log");

    await ejercicio8(1);

    expect(consoleSpy).toHaveBeenCalledWith('Número de artículos:', 2); /// 2 artículos

    consoleSpy.mockRestore();
});

test("ejercicio8: selecciona 2 y muestra títulos", async () => {
    const consoleSpy = jest.spyOn(console, "log");

    await ejercicio8(2);

    expect(consoleSpy).toHaveBeenCalledTimes(2); // Dos veces, por los dos artículos
    expect(consoleSpy).toHaveBeenCalledWith('Título', mockweb.title);
    
    consoleSpy.mockRestore();
});

test("ejercicio8: selecciona otro valor y muestra una tabla", async () => {
    const consoleSpy = jest.spyOn(console, "table");

    await ejercicio8(3);

    expect(consoleSpy).toHaveBeenCalledWith([crearFilaTabla(mockweb), crearFilaTabla(mockweb)]); // Dos filas, una por cada mockweb

    consoleSpy.mockRestore();
});