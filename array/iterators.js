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



// forEach - этот метод перебирает все элементы массива и для каждого элемента вызывает callback функцию.

// может принимать три аргумента (текущий элемент масива, индекс, массив)
// ни чего не возвращает
// в этом методе не работают continue и brake
// предназначан только для перебора массива
const arrayForEach = ['one', 'two', 'three', 'four', 'five'];
arrayForEach.forEach(function(item, index) {
    console.log(`index: ${index}`, `item: ${item}`);
});

const arrayForEachTwo = ['one', 'two', 'three', 'four', 'five'];
arrayForEachTwo.forEach(item => console.log(`item: ${item}`));




// map() - перебирает массив и возвращает новый, при помощи return.
const number = [1, 2, 3, 4, 5];
let doubleNumber = number.map(function(number) {
    return number * 2;
})
console.log(doubleNumber); // [2, 4, 6, 8, 10]


const arrayMap = ['one', 'two', 'three', 'four', 'five'];
let newArrayMap = arrayMap.map((item, i) => {
    return `#: ${i} - ${item}`;
})
console.log(newArrayMap); // ["#: 0 - one", "#: 1 - two", "#: 2 - three", "#: 3 - four", "#: 4 - five"]


const arrayMapWithIndex = ['one', 'two', 'three', 'four', 'five'];
let createObject = arrayMapWithIndex.map(item => item);
console.log(createObject); // ["one", "two", "three", "four", "five"]
