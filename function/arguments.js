function checkType() {
    console.log(typeof arguments);
    console.log(Array.isArray(arguments));

    let arrayArguments = Array.prototype.slice.call(arguments);
    console.log(Array.isArray(arrayArguments));
}

checkType();



// rest
function rest(...args) {
    console.log(args);
    console.log(Array.isArray(args));
}

rest(1, 2, 3, 4);



function rest2(extra, ...args) {
    console.log(extra);
    console.log(...args);
}

rest('John', 1, 2, 3, 4, true);