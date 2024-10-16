/*
1.7 Crea una clase para trabajar diferentes transformaciones de un string
inicial con diferentes métodos:
- Conversión de todo el string a array de caracteres uno por uno
- La ordenación de los caracteres de manera aleatoria
- La inversión del orden de caracteres
- Quitar las vocales
- Quitar las consonantes.
- Array de palabras
- Inversión del orden de las palabras del string
*/

class Trans_string {
    constructor(string, array = []) {
        this.string = string;
        this.array = array;
    }

    convertir_a_array() {
        this.array = []; // reinicinado el valor para evitar posibles errores.
        for (let i = 0; i < this.string.length; i++) {
            this.array.push(this.string[i]);
        }
    }


    aleatorizar_string() {
        this.convertir_a_array()
        let valor_temporal, random;
        for (let i = this.array.length - 1; i > 0; i--) {
            random = Math.floor(Math.random() * (i + 1));
            valor_temporal = this.array[i];
            this.array[i] = this.array[random];
            this.array[random] = valor_temporal;
        }
        this.string = this.array.join(" ")
    }

    invertir_string() {
        let texto_invertido = "";
        for (let i = this.string.length; i > 0; i--) {
            texto_invertido += this.string[i-1];
        } 
        this.string = texto_invertido;
    }

    quitar_vocales() {
        this.convertir_a_array()
        this.array = this.array.filter(caracter => !/[aeiouáéíóúü]/gi.test(caracter));
        this.string = this.array.join(" ")

    }

    quitar_consonantes() {
        this.convertir_a_array()
        this.array = this.array.filter(caracter => !/[bcdfghjklmnpqrstvwxyzñŕśźńç]/gi
.test(caracter));
        this.string = this.array.join(" ")

    }

    array_palabras() {
        this.array = this.string.split(/\s+/);
    }

    invertir_palabras() {
        this.array_palabras()
        this.array.reverse();
        this.string = this.array.join(" ")
    }
}

module.exports = {
    Trans_string,
}

// NODE TESTING
let miString = new Trans_string("Este es un ejemplo de prueba.");
miString.convertir_a_array()
console.log(miString.array)

miString = new Trans_string("Este es un ejemplo de prueba.");
miString.aleatorizar_string()
console.log(miString.string)

miString = new Trans_string("Este es un ejemplo de prueba.");
miString.invertir_string()
console.log(miString.string)

miString = new Trans_string("Este es un ejemplo de prueba.");
miString.quitar_vocales()
console.log(miString.string)

miString = new Trans_string("Este es un ejemplo de prueba.");
miString.quitar_consonantes()
console.log(miString.string)

miString = new Trans_string("Este es un ejemplo de prueba.");
miString.array_palabras()
console.log(miString.array)

miString = new Trans_string("Este es un ejemplo de prueba.");
miString.invertir_palabras()
console.log(miString.string)