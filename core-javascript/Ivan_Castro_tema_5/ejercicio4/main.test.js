/*
TEST PARA EL VALIDADOR DE EMAILS
*/


const { validate_mail } = require("./main");

test("Comprobando efectividad del validador", () => {
    let emailcorrecto = "asdf@asdf.com";
    let resultadoEsperado1 = 1;

    let emailincorrecto1 = "asdf@asdf.";
    let resultadoEsperado2 = null;

    let emailincorrecto2 = "a@sdf@asdf.com";
    let resultadoEsperado3 = null;

    let emailincorrecto3 = null;
    let resultadoEsperado4 = null;

    expect(validate_mail(emailcorrecto)).toBe(resultadoEsperado1);
    expect(validate_mail(emailincorrecto1)).toBe(resultadoEsperado2);
    expect(validate_mail(emailincorrecto2)).toBe(resultadoEsperado3);
    expect(validate_mail(emailincorrecto3)).toBe(resultadoEsperado4);
});
