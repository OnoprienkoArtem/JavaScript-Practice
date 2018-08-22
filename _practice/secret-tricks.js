// simple function

const sum = (a, b) => a + b;
console.log(sum(1, 2)); // 3


const csum = a => b => a + b;
console.log(csum(1)(2)); // 3


console.log(csum(1)); // b => 1 + b


const plusOne = csum(1);
console.log(plusOne(2)); // 3


// work with array
// map();
console.log([1, 2, 3].map(x => x + 1)); // [2, 3, 4]

const arr1 = [1, 2, 3];
const plusOne1 = x => x + 1;
console.log(arr1.map(x => plusOne1(x))); // [2, 3, 4]
//or =>  this two constructions are equivalent
console.log(arr1.map(plusOne1)); // [2, 3, 4]
