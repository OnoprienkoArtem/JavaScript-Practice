function add(x, y) {
    return x + y;
}
console.log(add(2, 5));

let add_arrow = (x, y) => x + y;
console.log(add_arrow(2, 5));



let square = function(x) {
    return x * x;
}
console.log(square(3));

let square_arrow = x => x * x;
console.log(square_arrow(3));



let giveMeAnsver = function() {
    return 42;
}
console.log(giveMeAnsver());

let giveMeAnsver_arrow = () => 42;
console.log(giveMeAnsver_arrow());



let log = function() {
    console.log('Logging');
}
log();

let log_arrow = () => console.log('Logging');
log_arrow();


let multiply = function (x, y) {
    let result = x * y;
    return result;
}
console.log(multiply(2, 5));

let multiply_arrow = (x, y) => {
    let result = x * y;
    return result;
}
console.log(multiply_arrow(5, 2));



