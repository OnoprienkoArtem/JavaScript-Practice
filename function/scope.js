var language = 'JS';

function show() {
    console.log(language);
}

show();

function first() {
    function second() {
        return console.log(language);
    }
    return second();
}

first();



// lecsical scope
function grandfather() {
    var name = 'John';
    // likes не доступно здесь

    function parent() {
        // name доступно здесь
        // likes недоступно здесь

        function child() {
            // name доступно здесь
            var likes = 'JS';
        }
    }
}



// closure

function greet() {
    var name = 'John';

    return function () {
        console.log('Hi ' + name + '!');
    }
}

greet();  //ничего не произойдет

// возвращение функции из greet() сохранена в greetLetter
var greetLetter = greet();

// вызов
greetLetter();
// or
greet()();



// ------- closure examples

const fib = [1, 2, 3, 5, 8, 13];

for (let index = 0; index < fib.length; index++) {
    (function (j) {
        setTimeout(function () {
            console.log(`fib ${j} = ${fib[j]}`);
        }, 1000)
    })(index);
}

// fib 0 = 1
// fib 1 = 2
// fib 2 = 3
// fib 3 = 5
// fib 4 = 8
// fib 5 = 13


// ---

function sayHello(name) {
    let message = 'Hello ' + name;

    return function () {
        return message;
    }
}

const helloJohn = sayHello('John');
console.log(helloJohn()); // Hello John

const helloSara = sayHello('Sara');
console.log(helloSara()); // Hello Sara



// ---

function createFrameworksManager() {
    const fm = ['Angular', 'React'];

    return {
        print: function () {
            console.log(fm.join());
        },
        add: function (framework) {
            fm.push(framework)
        }
    }
}

const manager = createFrameworksManager();

manager.print();  // Angular,React

manager.add('Vue.js');
manager.print();  // Angular,React,Vue.js