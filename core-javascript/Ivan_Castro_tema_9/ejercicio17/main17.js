/*
17.Define a function capitalize_last_name() that accepts as argument
a string with a (single) first and a (single) last name, and returns a
string in which only the first letter of the first name is uppercase,
whereas all letters of the last name are uppercase; in otherwords,
'marisa tomei' becomes 'Marisa TOMEI'. (Tip: use str.split() to split
a str into separate words.) If something other than a str object is
passed as an argument, the function should raise a TypeError. (Tip:
you can use isistance() to check whether an object is of a particular
type.) If the str does not consist of exactly two words, the function
should raise a ValueError.
*/

let full_name;

class ValueError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValueError";
    }
}

function capitalize_last_name(name) {
    if (typeof name !== "string") {
        throw new TypeError("Type of value not accepted! Expected a string.");
        
        /* A considerar que via prompt no se puede obtener este TypeError dado
        que prompt() siempre pasa el value tipo string.
        Sin embargo, esta posibilidad sí está contemplada en los tests.*/
    } 
    array = name.split(/\s+/);
    if (array.length !== 2) {
        throw new ValueError("ValueError: Name must consist of exactly two words.");
    } 

    array[0] = array[0].charAt(0).toUpperCase() + array[0].slice(1).toLowerCase();
    array[1] = array[1].toUpperCase();
    return array.join(" ");
} 


function iniciar() {
    full_name = prompt("Type your first and second names."); 
    array = full_name.split(/\s+/);
    if (array.length !== 2) {
        alert(new Error("ValueError: Name must consist of exactly two words."));
    } 
    alert(capitalize_last_name(full_name));
}


module.exports = {
    capitalize_last_name,
    ValueError,
}

// NODE TESTING:

// ---- dejo algunos comentados porque si no el script te va a explotar ------

// console.log(capitalize_last_name('')); // ---> ValueError
// console.log(capitalize_last_name()); // ---> TypeError
// console.log(capitalize_last_name(1234)); // ---> TypeError
// console.log(capitalize_last_name("Javier")); // ---> ValueError
console.log(capitalize_last_name("iván castro")); // ---> Iván CASTRO
