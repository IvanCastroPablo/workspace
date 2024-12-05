/*

Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number.

For example if you accept 025468 the output should be 0-254-6-8.

*/

const prompt = require("prompt-sync")();

const number = prompt("Please provide an integer number of any lenght: ").toString();

console.log(Array.from(number));
