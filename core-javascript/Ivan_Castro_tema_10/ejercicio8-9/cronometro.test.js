const { iniciar, parar, reiniciar, actualizar } = require('./cronometro.js');

describe('Cronómetro', () => {
    beforeEach(() => {
        reiniciar();
    });

    test('debe inicializar correctamente', () => {
        expect(actualizar()).toEqual({ horas: 0, minutos: 0, segundos: 0 });
    });

    test('debe incrementar los segundos', () => {
        iniciar();
        jest.advanceTimersByTime(2000); // Avanza el tiempo 2 segundos
        expect(actualizar()).toEqual({ horas: 0, minutos: 0, segundos: 2 });
    });

    test('debe incrementar los minutos después de 60 segundos', () => {
        iniciar();
        jest.advanceTimersByTime(61000); // Avanza el tiempo 61 segundos
        expect(actualizar()).toEqual({ horas: 0, minutos: 1, segundos: 1 });
    });

    test('debe detener el cronómetro', () => {
        iniciar();
        jest.advanceTimersByTime(3000); // Avanza 3 segundos
        parar();
        expect(actualizar()).toEqual({ horas: 0, minutos: 0, segundos: 3 });
    });

    test('debe reiniciar el cronómetro', () => {
        iniciar();
        jest.advanceTimersByTime(5000); // Avanza 5 segundos
        reiniciar();
        expect(actualizar()).toEqual({ horas: 0, minutos: 0, segundos: 0 });
    });
});