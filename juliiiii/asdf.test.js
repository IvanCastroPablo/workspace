const { asdf } = require("./superjulia.js");


test("Comprobar la megafunción", () => {
    expect(asdf("me gusta")).toEqual("me gusta");
});

test("Comprobar la megafunción cuando está vacía", () => {
    expect(asdf()).toEqual(undefined);
});

test("Comprobar la megafunción cuando ponga numeros", () => {
    expect(asdf(1)).toEqual(1);
});