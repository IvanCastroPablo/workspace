
function coordenadaZ(x, y) {
  x = x + 10;
  y = x + 15;
  return x + y;
}

let x = parseInt(prompt("Coordenada eje x: "))
let y = parseInt(prompt("Coordenada eje y: "))
let z;

for (let i = 0; i < 3; i++) {
  z = coordenadaZ(x, y);
  x = x + 1;
  y = y + 1;
}

alert(x + " . " + y)