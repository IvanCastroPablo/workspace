// Informate, ¿cómo se declara una clase?

// Para declarar una clase bastaría con utilizar la palabra clave "class", seguida del nombre que deseáramos poner a dicha clase.

class Polygon {

};

// A pesar de que esta clase está vacía ya puede instanciarse:
let square = new Polygon();

// Generalmente las clases alojan un método especial llamado "constructor":
class Polyhedron {
    constructor(faces, edges, vertices) {
        this.faces = faces;
        this.edges = edges;
        this.vertices = vertices;
    }
};

// Instanciando...
let tetrahedron = new Polyhedron(4, 6, 4);

// Comprobando el resultado
console.log(tetrahedron.edges);

