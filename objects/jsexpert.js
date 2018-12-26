let object = {}; //literal - чаще всего используется
let newObject = new Object();
let createObject = Object.create(); 


// let user = {
//     firstName: 'John',
//     secondName: 'Connor'
// };

let user = {};

user.firstName = 'John';
user['secondName'] = 'Connor';


let user1 = {
    firstName: 'John',
    secondName: 'Connor',
    login: 'T2',
    password: 'doomsday',
    age: 25
};

// get property
let name = user1.firstName;
let surname = user1['secondName'];

// change property
user1.password = 'greenday';

// delete property
delete user1.secondName;

console.log(user1);


for (let key in user1) {
    console.log(user1[key]);
    console.log(key);
}


let user2 = {
    firstNmae: 'John',
    age: 25,
    info: {
        birthDay: '12/12/1800',
        language: 'English'
    },
    showAge: function() {
        return this.age;
    }
}

console.log(user2.info.language); 
console.log(user2.showAge());



let age = {
    18: 'Teenager'
}

// console.log(age.18);     Error
console.log(age['18']);



let userA = {
    age: 25,
    sex: 'male'
}

let userB = {
    age: 25,
    sex: 'male'
}

let userC = userA;

console.log(userA === userB);
console.log(userA === userC);

// copy object  -----------------------------
let products = {
    fruit: 'banana',
    vegetable: 'carrot',
    juice: 'orange'
};

let key;
let newProducts = {};

for (key in products) {
    newProducts[key] = products[key];
}

newProducts.fruit = 'apple';
console.log(products);
console.log(newProducts);




let goods = {
    fruit: 'banana',
    vegetables: 'carrot'
}

let newGoods = {
    juice: 'orange'
}

let allGoods = Object.assign({}, goods, newGoods);

console.log(allGoods);



// iteration   ----------

let productsA = {
    fruit: 'banana',
    vegetable: 'carrot',
    juice: 'orange'
};

for (let item in productsA) {
    console.log('key: ' + item + ', value: ' + productsA[item]);
}


// Object.keys() - return array keys = 'string'
let productsB = {
    fruit: 'banana',
    vegetable: 'carrot',
    juice: 'orange'
};

let productsName = Object.keys(productsB);
console.log(productsName);


// spread 
const programmer = {
    name: 'David',
    age: 30,
    editor: 'VS Code'
}

const userW = {
    editor: 'sublime text'
}

const newUser = {...programmer, ...userW};
console.log(newUser);


// destructuring
let productsD = {
    juice: 'orange',
    fruit: 'banana',
    vegetable: 'carrot'
}

const { juice, fruit, vegetable } = productsD;
console.log(fruit);



let productsF = {
    juice: 'orange',
    fruit: 'banana',
    vegetable: 'carrot'
}

const { juice: j, fruit: b, vegetable: v } = productsF;
console.log(j);



let productsE = {
    juice: 'orange',
    fruit: 'banana'
}

const { juice: jj, fruit: f, vegetableE = 'carrot' } = productsE;
console.log(f);



let productsW = {
    juice: 'orange',
    fruit: 'banana',
    vegetable: 'carrot'
}

const { juiceW, ...rest } = productsW;
console.log(rest);


