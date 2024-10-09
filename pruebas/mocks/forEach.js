function forEach(items, callback) {
    for (const item of items) {
      callback(item);
    }
}

module.exports = forEach;


function isMultipleOf10(x) {   
    
    if (x % 10 == 0)     
        return true;   
    else    
        return false; 
}   

console.log(isMultipleOf10(100));


function isMultipleOf10(x) {
    if (x % 10 == 0)     
        return true;   
    else     
        return false;
}   

console.log(isMultipleOf10(100)); 
console.log(isMultipleOf10(34)); // This will make our code execute the "return false;" statement.