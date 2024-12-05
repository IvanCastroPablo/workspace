/*

Write a JavaScript function to clone an array.

Test Data:

console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

[1, 2, 4, 0] [1, 2, [4, 0]]

*/

const array1 = [1, 2, 4, 0];

const array2 = [1, 2, [4, 0]];

const clone = array1.concat(array2);

console.log(clone);
