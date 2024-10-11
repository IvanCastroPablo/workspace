/*
TEST PARA MODIFICAR FRASES
*/


const { titulo} = require("./main9");

test("Las frases se devuelven modificadas", () => {
    expect(titulo("me gusta la tarta de manzana")).toBe("Me Gusta La Tarta De Manzana");
    expect(titulo("david es un peaso de profesor")).toBe("David Es Un Peaso De Profesor");
    expect(titulo("estoy hasta el gorro de estudiar")).toBe("Estoy Hasta El Gorro De Estudiar");
    
});