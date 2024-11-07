//jest test para sets

// jest test para sets

const { obtenerRango } = require('./sets.js');

describe('obtenerRango', () => {
    test('retorna conjunto con elementos dentro del rango (caso normal)', () => {
        let set = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        expect(obtenerRango(set, 5, 8)).toEqual(new Set([6, 7]));
    });

    test('retorna conjunto vacío si no hay elementos en el rango', () => {
        let set = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        expect(obtenerRango(set, 0, 0)).toEqual(new Set());
    });

    test('retorna conjunto con elementos en rango decimal', () => {
        let set = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        expect(obtenerRango(set, 2.4, 6.1)).toEqual(new Set([3, 4, 5, 6]));
    });

    test('retorna conjunto vacío para conjunto vacío de entrada', () => {
        let set = new Set();
        expect(obtenerRango(set, 5, 8)).toEqual(new Set());
    });

    test('retorna conjunto vacío si el rango no incluye ningún elemento del conjunto vacío', () => {
        let set = new Set();
        expect(obtenerRango(set, 0, 0)).toEqual(new Set());
    });

    test('retorna elementos decimales dentro del rango', () => {
        let set = new Set([1.2, 2.2, 4.5, 8.9, 4.1]);
        expect(obtenerRango(set, 2, 5)).toEqual(new Set([2.2, 4.5, 4.1]));
    });

    test('retorna conjunto vacío si min es mayor que max (rango invertido)', () => {
        let set = new Set([1, 2, 3, 4, 5]);
        expect(obtenerRango(set, 5, 2)).toEqual(new Set());
    });

    test('retorna conjunto vacío si min y max son iguales', () => {
        let set = new Set([1, 2, 3, 4, 5]);
        expect(obtenerRango(set, 3, 3)).toEqual(new Set());
    });

    test('maneja conjuntos con duplicados', () => {
        let arrayConDuplicados = [1, 2, 2, 3, 4, 4, 5];
        let set = new Set(arrayConDuplicados);
        expect(obtenerRango(set, 1, 5)).toEqual(new Set([2, 3, 4]));
    });

    test('retorna conjunto completo excluyendo límites cuando min y max son extremos', () => {
        let set = new Set([1, 2, 3, 4, 5]);
        expect(obtenerRango(set, 1, 5)).toEqual(new Set([2, 3, 4]));
    });

    test('maneja valores negativos en el conjunto y rango', () => {
        let set = new Set([-10, -5, 0, 5, 10]);
        expect(obtenerRango(set, -6, 6)).toEqual(new Set([-5, 0, 5]));
    });
});
