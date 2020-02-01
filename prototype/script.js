const person = new Object({
    name: 'John',
    age: 30,
    say: function() {
        console.log('Hello! ' + this.name, this);
    }
});


person.say(); // Hello! John {name: "John", age: 30, say: ƒ}
// person.greet(); Uncaught TypeError: person.greet is not a function

Object.prototype.greet = function() {
    console.log('Greet!! ' + this.name);
}

person.greet(); // Greet!! John

// prototype - определенный объект который 
// присутствует у родительских элементов.
// c помощью этого объекта мы можеш расширать 
// свойства объектов или класов.


const sara = Object.create(person);
sara.name = 'Sara';

sara.say(); // Hello! Sara

sara.greet(); // Greet!! Sara