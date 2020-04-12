// LISKOV SUBSTITUTION PRINCIPLE





//===================

// class Person {
//
// }
//
// class Member extends Person {
//     access() {git
//         console.log('You have access')
//     }
// }
//
// class Guest extends Person {
//     isGuest = true;
// }
//
// class Employee1OurCompany extends Member {
//
// }
//
// class Employee2OurCompany extends Member {
//
// }
//
// class Employee1AnotherCompany extends Guest {
//     access() {
//         throw new Error('You don`t have access!!!')
//     }
// }
//
// function openAccess(member) {
//     member.access();
// }
//
// openAccess(new Employee1OurCompany);
// openAccess(new Employee2OurCompany);






// Wrong way

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
