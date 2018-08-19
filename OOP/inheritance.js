// Свойство constructor– ссылка на функцию, создавшую экземпляр объекта. 
// То есть в данном случае, по сути на саму себя.


// __proto__ - сыслка на прототип объекта.
// prototype - свойство функции-конструктора.


function NewFunction() {
    console.log(NewFunction.prototype);
}
NewFunction();


// прототипное наследование в JS
// наследование - это концепция ООП, благодоря которой вы можете расшиоить функциональность одного класса за счет методов
// и свойств другого класса.

// наследник может вызывать и использовать методы родителя. фактически у самого наследника этих методов нет.
// С помощью механизма наследования он их вызывает у родителя как будто они принадлежат ему самому.

// Класс, определенный через наследование от другого класса, называется: производным классом, классом потомком или подклассом.
// Класс, от которого новый класс наследуется, называется: предком, базовым классом, суперклассом.


function Machine(product) {
    this.product = product;
}

// Machine.prototype.on = function() {
//     console.log(`${this.product} is ON!`);
// }
// Machine.prototype.off = function () {
//     console.log(`${this.product} is OFF!`);
// }
// или
Machine.prototype = {
    on: function() {
        console.log(`${this.product} is ON!`);
    },
    off: function () {
        console.log(`${this.product} is OFF!`);
    }
}


function TapeRecorder(product, model) {
    Machine.apply(this, [product]); // для того чтобы использовать свойства родителя (или конкретное свойство или arguments)
    this.model = model;
}

TapeRecorder.prototype = Object.create(Machine.prototype);
// Метод Object.create() создает новый объект и устанавливает в его прототип то, что указано в качестве аргумента.

const tapeRecorder = new TapeRecorder('Tape recorder', 'TH45');
tapeRecorder.on(); // Tape recorder is ON!
tapeRecorder.off(); // Tape recorder is OFF!

TapeRecorder.prototype.pause = function() { // собственный метод
    console.log(`${this.product} is PAUSE!`);
}
tapeRecorder.pause(); // Tape recorder is PAUSE!




