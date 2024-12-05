/*

Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.

Test Data:

console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

Expected Output: 7 [] [7, 9, 0] [7, 9, 0, -2] []

*/

const array1 = [1, 3, 4, 6, 1, 7];

function slicer(n) {
  if (Array.isArray(n) === true) {
    console.log(n[0]);
  } else {
    console.error('No array provided');
  }
}

slicer(array1);
