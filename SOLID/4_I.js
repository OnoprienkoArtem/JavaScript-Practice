// INTERFACE SEGREGATION PRINCIPLE




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
