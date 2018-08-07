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

