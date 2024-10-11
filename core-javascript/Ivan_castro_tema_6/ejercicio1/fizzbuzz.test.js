/*
TEST PARA MODIFICAR FRASES
*/


const { fizzbuzz } = require("./fizzbuzz.js");


test("Testing fizzbuzz 1 ", () => {
    expect(fizzbuzz(15)).toBe("Fizzbuzz!");
});
test("Testing fizzbuzz 2 ", () => {
    expect(fizzbuzz(18)).toBe("fizz");
});
test("Testing fizzbuzz 3 ", () => {
    expect(fizzbuzz(20)).toBe("buzz");
});
test("Testing fizzbuzz 4 ", () => {
    expect(fizzbuzz(0)).toBe("I cannot play with zeros...");
});
test("Testing fizzbuzz 5 ", () => {
    expect(fizzbuzz("asdf")).toBe("Not a number, you big banana!");
});
test("Testing fizzbuzz 6 ", () => {
    expect(fizzbuzz(7)).toBe("7");
});
    
    
