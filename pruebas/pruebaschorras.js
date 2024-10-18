function* asdf() {
  yield 1;
  yield 2;
  return 3;
}

let qwerty = asdf();

console.log(qwerty.next())
console.log(qwerty.next())
console.log(qwerty.next())

