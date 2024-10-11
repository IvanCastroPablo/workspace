// Una función que pida una dirección de email y valide si la dirección es correcta o no.

function validate_mail(email) {
    let valid_format = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (valid_format.test(email)) {
        return 1;
    } else { return null;}
}

function inicializar(arg) {
    if (validate_mail(arg) === 1) {
        return "Dirección valida";
    } else {
        return "Dirección inválida";
    }
}

// Ejecuciones sugeridas:
console.log(inicializar("assemblyworker@gmail.com")); // válido
console.log(inicializar("assemblyworker@gmail=com")); // inválido
console.log(inicializar("@assemblyworker@gmail.com")); // inválido
console.log(inicializar("assemblyworkergmail.com")); // inválido

module.exports = {
    validate_mail
}