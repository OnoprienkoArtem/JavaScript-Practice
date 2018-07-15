// ES5
// var person = {
//     firstName: 'John',
//     lastName: 'Doe'
// }
//
// var firstName = person.firstName;
// var lastName = person.lastName;
// console.log(firstName, lastName);




ES6
let person = {
    firstName: 'John',
    lastName: 'Doe'
}

let { firstName: fn, lastName: ln } = { firstName: 'John', lastName: 'Doe' };

let { firstName, lastName } = person;
console.log(firstName, lastName);

let { firstName: fn, lastName: ln } = person;
console.log(fn, ln);



