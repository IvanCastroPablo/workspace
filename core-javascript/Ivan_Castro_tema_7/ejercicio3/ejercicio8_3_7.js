/*

Write a JavaScript program to find the most frequent item in an array.

Sample array:
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

Sample Output: a ( 5 times )

*/

let myArray = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

const myDic = {};

for (let i = 0; i < myArray.length; i += 1) {
    const item = myArray[i];
    if (myDic[item]) {
        myDic[item] += 1;
    } else {
        myDic[item] = 1;
    }
}

// retornando el objeto a array:
myArray = Object.entries(myDic)

for (let i = 0; i < myArray.length - 1; i += 1) {
    if (myArray[i][1] > myArray[i + 1][1]) {
        myArray.splice(i + 1, 1);
    }
}

console.log(`The value "${myArray[0][0]}" appears ${myArray[0][1]} times.`);
