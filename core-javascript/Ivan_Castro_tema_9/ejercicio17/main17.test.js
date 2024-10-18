// JEST TESTING FOR EXERCISE 17, MODULE 9

const { capitalize_last_name, ValueError } = require('./main17.js');

describe('capitalize_last_name function', () => {

    test('String vacío debería lanzar un ValueError', () => {
        expect(() => capitalize_last_name('')).toThrow(ValueError);
    });

    test('Valor no string debería lanzar un TypeError', () => {
        expect(() => capitalize_last_name(12345)).toThrow(TypeError);
    });

    test('String con menos de dos palabras debería lanzar un ValueError', () => {
        expect(() => capitalize_last_name('Marisa')).toThrow(ValueError);
    });

    test('String con más de dos palabras debería lanzar un ValueError', () => {
        expect(() => capitalize_last_name('Marisa Tomei Extrapalabra')).toThrow(ValueError);
    });

    test('String con caracteres especiales debería funcionar correctamente', () => {
        expect(capitalize_last_name('maría garcía')).toBe('María GARCÍA');
    });
});