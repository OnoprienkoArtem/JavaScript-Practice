// INTERFACE SEGREGATION PRINCIPLE

class Animal {
    constructor(name) {
        this.name = name;
    }
}

const walker = {
    walk() {
        console.log(`${this.name} can walk`)
    }
};

const swimmer = {
    swim() {
        console.log(`${this.name} can swim`)
    }
};

const flier = {
    fly() {
        console.log(`${this.name} can fly`)
    }
};

class Dog extends Animal {}
class Eagle extends Animal {}
class Whale extends Animal {}

Object.assign(Dog.prototype, walker, swimmer);
Object.assign(Eagle.prototype, walker, flier);
Object.assign(Whale.prototype, swimmer);

const dog = new Dog('Max');
dog.walk();
dog.swim();

const eagle = new Eagle('Eag');
eagle.walk();
eagle.fly();

const whale = new Whale('Big');
whale.swim();




// Wrong way - should avoid this!!!

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//
//     walk() {
//         console.log(`${this.name} can walk`)
//     }
//
//     swim() {
//         console.log(`${this.name} can swim`)
//     }
//
//     fly() {
//         console.log(`${this.name} can fly`)
//     }
// }
//
// class Dog extends Animal{
//     fly() {
//         return null;
//     }
// }
//
// class Eagle extends Animal{
//     swim() {
//         return null;
//     }
// }
//
// class Whale extends Animal{
//     walk() {
//         return null;
//     }
//
//     fly() {
//         return null;
//     }
// }
//
//
// const dog = new Dog('Max');
// dog.walk();
// dog.swim();
// dog.fly(); //  don't correct
//
// const eagle = new Eagle('Eag');
// eagle.walk();
// eagle.swim(); //  don't correct
// eagle.fly();
//
// const whale = new Whale('Big');
// whale.walk(); //  don't correct
// whale.swim();
// whale.fly(); //  don't correct
