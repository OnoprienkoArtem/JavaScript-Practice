// this в функции

// при вызове функции this, внутри нее, - это глобальный объект window.
function checkThis() {
    console.log(this === window);
}
checkThis(); // true



// при вызове в режиме use strict, this будет равен undefined.
function checkThis1() {
    'use strict'
    console.log(this === undefined);
}
checkThis1(); // true



// this в объектах

// в методах, this ссылается на объект, в контексте которого вызван метод.
let user = {
    checkThis: function() {
        console.log(this === user);
    }
}
user.checkThis(); // true

// при вызове метода, с использованием this внутри него, вместо самого this будет подставлятся имя объекта в контексте
// которого вызывается метод. 


// полезность this, полностью раскрывается при разборе тем по ООП.

let user1 = {
    first: 'Dave',
    lastName: 'Dowson'
}

let user2 = {
    first: 'Bob',
    lastName: 'Gordon'
}

function fullName() {
    console.log(`${this.firstName} ${this.lastName}`);
}

user1.getFullName = fullName;
user2.getFullName = fullName;

user1.getFullName();
user2.getFullName();




// ПОТЕРЯ КОНТЕКСТА - неявное изменение значения this.


let user3 = {
    getFullName: function() {
        console.log(this === user);

        function innerFunction() {
            console.log(this === user);  // this === window (потеря контекста)
        }
        innerFunction();
    }
}

user.getFullName(); 
// true
// false



// this в стрелочных функциях
// в стрелочных функциях нет проблемы потери контекста как вложенной функции, т.к. this стрелочной функции заимствует this
// из внешней функции, в которой она определена.

let user4 = {
    getFullName: function () {
        console.log(this === user);

        const innerFunction = () => {
            console.log(this === user);  
        }
        innerFunction();
    }
}

user.getFullName();
// true
// true

// при вызове стрелочной функции в глобальной области видимости, у нее, как и у обычной функции, this раывен либо window, 
// либо undefimed.





