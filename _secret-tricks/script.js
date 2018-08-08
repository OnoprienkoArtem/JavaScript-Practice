// simple function

const sum = (a, b) => a + b;
console.log(sum(1, 2)); // 3


const csum = a => b => a + b;
console.log(csum(1)(2)); // 3


console.log(csum(1)); // b => 1 + b


const plusOne = csum(1);
console.log(plusOne(2)); // 3
