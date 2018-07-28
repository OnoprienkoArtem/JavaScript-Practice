// перебор свойств

// for
// заполняем пустой массив
const arrayOne = [];
for (let i = 0; i <= 5; i++) {
    arrayOne[i] = `value ${i}`;
}

console.log(arrayOne); // ["value 0", "value 1", "value 2", "value 3", "value 4", "value 5"]

const arrayOnePush = [];
for (let i = 0; i <= 5; i++) {
    arrayOnePush.push(`value ${i}`);
}

console.log(arrayOnePush); // ["value 0", "value 1", "value 2", "value 3", "value 4", "value 5"]


// for ... of
const arrayForOf = ['one', 'two', 'three', 'four', 'five'];
for (let i of arrayForOf) {
    console.log(i);
}
// one
// two
// three
// four
// five


const arrayForOfCondition = ['one', 'two', 5, 'three', 'four', 'five', null, 9];
for (let i of arrayForOfCondition) {
    if (typeof i === 'string') {
        continue;
    }

    if (i === null) {
        break;        
    }
    console.log(i);
}
// 5