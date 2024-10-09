/*
TEST PARA EL CONTADOR DE DIGITOS
*/


const { contar_digito, escoger_digito, escoger_numero } = require("./main");

test("Comprobando el conteo de dígitos", () => {
    expect(contar_digito('1', '112123')).toBe(3);
    expect(contar_digito('2', '112123')).toBe(2);
    expect(contar_digito('9', '112123')).toBe(0);
});

test("Comprobando la validez del dígito", () => {
    expect(escoger_digito("1")).toBe("1");
    expect(escoger_digito("12")).toBeNull();
    expect(escoger_digito("a")).toBeNull();
});

test("Comprobando la validez del número", () => {
    expect(escoger_numero("112123")).toBe("112123");
    expect(escoger_numero("abc")).toBeNull();
    expect(escoger_numero("")).toBeNull();
});