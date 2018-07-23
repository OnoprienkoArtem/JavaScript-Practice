function checkType() {
    console.log(typeof arguments);
    console.log(Array.isArray(arguments));

    let arrayArguments = Array.prototype.slice.call(arguments);
    console.log(Array.isArray(arrayArguments));
}

checkType();

