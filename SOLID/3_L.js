// LISKOV SUBSTITUTION PRINCIPLE


// class Person {
//     access() {
//         console.log('You have access')
//     }
// }
//
// class Employee1OurCompany extends Person {
//
// }
//
// class Employee2OurCompany extends Person {
//
// }
//
// class Employee1AnotherCompany extends Person {
//     access() {
//         throw new Error('You don`t have access!!!')
//     }
// }
//
// function openAccess(person) {
//     person.access();
// }
//
// openAccess(new Employee1OurCompany());
// openAccess(new Employee2OurCompany());
// openAccess(new Employee1AnotherCompany());
