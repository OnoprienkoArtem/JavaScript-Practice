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


// если прописать метод с таким же именем в потомке он перезапишет родительский метод
TapeRecorder.prototype.on = function () {
    Machine.prototype.on.apply(this, arguments);  // для использоания функционала родителя 
    console.log(`Model: ${this.model}`);
}
tapeRecorder.on(); // Tape recorder is ON! own method!!!

// свойство constructor - ссылка на родителя (показывает какая функция конструктор зодала объект)
// при наследовании свойство constructor перезаписывается
TapeRecorder.prototype.constructor === Machine; // true
TapeRecorder.prototype.constructor === TapeRecorder; // false

// для сохранения корректного конструктора, необходимо его явно присвоить вручную.
TapeRecorder.prototype.constructor = TapeRecorder;

TapeRecorder.prototype.constructor === Machine; // false
TapeRecorder.prototype.constructor === TapeRecorder; // true




// ------------------------------


// для удобства с начала прописывают весь функционал родителя потом отдельно весь функционал потомка, 
// потом создается специальная функция наследования:

function inheritance(parent, child) {
    let tempChild = child.prototype;
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;

    for (let key in tempChild) {
        if (tempChild.hasOwnProperty(key)) {
            child.prototype[key] = tempChild[key];            
        }
    }
}

inheritance(Machine, TapeRecorder);
