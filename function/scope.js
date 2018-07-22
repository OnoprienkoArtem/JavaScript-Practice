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

    return function() {
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
