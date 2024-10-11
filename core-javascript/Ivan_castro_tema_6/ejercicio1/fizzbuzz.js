// first exercise in https://github.com/dentednerd/jest-katas

let num;

function fizzbuzz(num){
    if (num == 0) {
        return "I cannot play with zeros...";
    } else if (num % 3 == 0 && num % 5 == 0) {
        return "Fizzbuzz!";
    } else if (num % 3 == 0) {
        return "fizz";
    } else if (num % 5 == 0) {
        return "buzz";
    } else if (isNaN(num)) {
        return "Not a number, you big banana!";
    } else {return `${num}`;};
}

function iniciar() {
    num = Number(document.getElementById("num").value);
    document.write(fizzbuzz(Number(num)));
}


module.exports = {
    fizzbuzz
}

// NODE TESTING

// como en otras ocasiones, el código pasa por más de un filtro. En este caso he escogido