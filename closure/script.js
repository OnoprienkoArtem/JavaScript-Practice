// Замыкание — это комбинация функции и лексического окружения, 
// в котором эта функция была определена. 
// Другими словами, замыкание дает вам доступ к Scope внешней функции 
// из внутренней функции. В JavaScript замыкания создаются каждый раз 
// при созданиии функции, во время ее создания.


function creatCalcFunction(a, b) {
    return function() {
        console.log(a + b);
    }
}

const calc = creatCalcFunction(5, 3);

// console.log(calc);  // ƒ () { console.log(a + b); }

calc();  // 8

// ----

function createIncrementor(n) {
    return function(num) {
        return n + num;
    }
}

const addOne = createIncrementor(1);
console.log(addOne(10)); // 1
console.log(addOne(23)); // 24

const addTen = createIncrementor(10);
console.log(addTen(10)); // 20
console.log(addTen(23)); // 33

// ----

function urlGenerator(domain) {
    return function(url) {
        return `https://${url}.${domain}`
    }
}

const comUrl = urlGenerator('com');
console.log(comUrl('google')); // https://google.com
console.log(comUrl('netflix')); // https://netflix.com


//  ----

function bind(cxt, fn) {
    return function(...args) {
        fn.apply(cxt, args);
    }
}

function logPerson() {
    console.log(`Person ${this.name}, ${this.age}`);
}

const sara = {
    name: 'Sara',
    age: 50
}

bind(sara, logPerson)(); // Person Sara, 50

