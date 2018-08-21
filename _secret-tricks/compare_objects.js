let person1 = {
    name: 'Tim', // match fields
    surname: 'Smith',
    age: '25', // match fields
    car: 'Toyota' // match fields
}

let person2 = {
    name: 'John', // match fields
    position: 'JS'
}

let person3 = {
    name: 'Art', // match fields
    age: '35', // match fields   
    car: 'Kia' // match fields
}

function comparePerson(obj1, obj2) {
    let out = {}
    let keys1 = Object.keys(obj1)
    let keys2 = Object.keys(obj2)

    for (let k1 of keys1) {
        flag = false;
        for (let k2 of keys2) {
            if (k1 === k2) {
                flag = true;
                out[k1] = obj2[k2];
            }
        }
        if (!flag) {
            out[k1] = obj1[k1];
        }
    }
    return out;
}