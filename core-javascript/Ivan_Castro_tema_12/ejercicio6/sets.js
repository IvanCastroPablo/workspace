/*
Crea una función para obtener todos los valores de un set que estén entre dos rangos (numéricos).

¿Qué quieres decir con esto? ¿Los valores numéricos que se encuentren alojados en índices intermedios de otros dos números?

¿Que cree una función que conforma un set que a su vez aloja todos los valores entre dos valores numéricos?

¿Que haga un return de un set que aloje esos valores numéricos?

¿Que haga un set previamente y de él saque valores intermediaros entre dos números escogidos?

Como no tengo mucha idea de lo que quieres, voy a hacer una función que requiera tres argumentos (min, max y set), y que haga un return de otro set con los valores existentes entre los parámetros max y min. Lo siento, David, pero el enunciado es muy pobre. Si quieres otra cosa, porfa ten a bien no suspenderme: dime lo que necesitas y te lo hago en un plisplas.
*/

function obtenerRango(set, min, max) {
    let resultado = new Set();
    for (let element of set) {
        if (element > min && element < max) {
            resultado.add(element)
        } 
    } return resultado;
};


// NODE TESTING

// normal set
let newset = new Set([1,2,3,4,5,6,7,8,9])
console.log(newset)
console.log(obtenerRango(newset, 5, 8));
console.log(obtenerRango(newset, 0, 0));
console.log(obtenerRango(newset, 2.4, 6.1));

// empty set
let secondset = new Set()
console.log(secondset)
console.log(obtenerRango(secondset, 5, 8));
console.log(obtenerRango(secondset, 0, 0));

//set with decimals
let thirdset = new Set([1.2, 2.2, 4.5, 8.9, 4.1]);
console.log(thirdset);
console.log(obtenerRango(thirdset, 2, 5));


module.exports = {
    obtenerRango,
}