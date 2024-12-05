/*
Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.

Test Data:
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));

Expected Output: -2 [9, 0, -2] [7, 9, 0, -2]

*/

const array1 = [1, 3, 4, 6, 1, 7, 8];

function getLast(array, n) {
  if (Array.isArray(array) === true) {
    console.log(array.slice(-n));
  } else {
    console.error('No array provided');
  }
}

getLast(array1, 3);
