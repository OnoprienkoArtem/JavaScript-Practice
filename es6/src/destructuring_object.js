// ES5
// var person = {
//     firstName: 'John',
//     lastName: 'Doe'
// }
//
// var firstName = person.firstName;
// var lastName = person.lastName;
// console.log(firstName, lastName);




// ES6
// let person = {
//     firstName: 'John',
//     lastName: 'Doe'
// }

// let { firstName: fn, lastName: ln } = { firstName: 'John', lastName: 'Doe' };

// let { firstName, lastName } = person;
// console.log(firstName, lastName);

// let { firstName: fn, lastName: ln } = person;
// console.log(fn, ln);



let user = {
    firstname: 'John',
    lastname: 'Doe',
    social : {
        facebook: 'johndoe',
        twitter: 'jdoe'
    }
}

let { firstname: fn, lastname: ln, social: {facebook: fb}, age = 25 } = user;
console.log(fn, ln, fb, age);

function post(url, {data: {firstname, lastname}, cache}) {
    console.log(firstname, lastname, cache);
}
let result = post('api/users', {data: user, cache: false});


function getUserInfo() {
    return {
        firstname: 'John',
        lastname: 'Doe',
        social : {
            facebook: 'johndoe',
            twitter: 'jdoe'
        }
    }
}

let { firstname, lastname, social: {twitter}} = getUserInfo();
console.log(firstname, lastname, twitter);
