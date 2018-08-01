const array = [];
const newArray = new Array();

console.log(typeof array); // object

const array1 = ['HTML', 'CSS'];
console.log(array1);

array1[2] = 'JS';
console.log(array1);
console.log(array1.length);


let arrayG = [1, 2, 3, 4];
let newArrayG = arrayG;
console.log(arrayG);
console.log(newArrayG);

newArrayG[2] = 555;
console.log(arrayG);
console.log(newArrayG);



// ARRAY METHODS 

// push() - добавляет в конец массива елементы и возвращает его.
const array2 = ['html'];
array2.push('css');
console.log(array2);

const newArray2 = ['HTML'];
for (let i = 0; i <= 10; i++) {
    newArray2.push('new index is ' + i);
}
console.log(newArray2);


// pop() - удаляет последний элемент массиваб уменьшает длинну, и возвращает удаленное значение.
const arrayPop = ['html', 'css', 'js'];
console.log(arrayPop);

const deleted = arrayPop.pop();
console.log(arrayPop);
console.log(deleted);


// unshift() - добавляет элементы или элементы в начало массива.
const arrayUnshift = ['html', 'css', 'js'];
console.log(arrayUnshift); //["html", "css", "js"]
arrayUnshift.unshift(true);
console.log(arrayUnshift); //[true, "html", "css", "js"]


// shift() - удаляет и возвращает первый элемент массива.
const arrayShift = ['html', 'css', 'js'];
console.log(arrayShift); // ["html", "css", "js"]

const deleted1 = arrayShift.shift();
console.log(arrayShift); // ["css", "js"]
console.log(deleted1); // html


// join() - преобразовывает массив в строку с заданным разделителем. Если разделитель не указать, то разделяет запятой.
const arrayJoin = ['html', 'css', 'js'];
console.log(arrayJoin); // ["html", "css", "js"]

const joind = arrayJoin.join();
console.log(joind); // html,css,js

const dashjoind = arrayJoin.join('---');
console.log(dashjoind); // html---css---js


// split() - разделяет строку на массив по переданному разделителю.
const names = 'html, css, js';

const arrSplit = names.split(', ');
console.log(arrSplit); // ["html", "css", "js"]


// slice() - копирует часть массива от и до (не включая это значение)
let arraySlice = ['Paul', 'John', 'Bill', 'Joe', 'Mark'];

console.log(arraySlice.slice(0, 3)); // ["Paul", "John", "Bill"]
console.log(arraySlice.slice(3)); // ["Joe", "Mark"]
console.log(arraySlice.slice(1, -1)); //["John", "Bill", "Joe"]
console.log(arraySlice.slice(-3, -2)); // ["Bill"]


// splice() - универсальный метод, выполняющий вставку или удаление элементов массива.
let arraySplice = ['one', 'two', 'three', 'four', 'five'];
const line = arraySplice.splice(2, 1);

console.log(arraySplice); // ["one", "two", "four", "five"]
console.log(line); // ["three"]

// вставка
const arraySpliceW = ['one', 'two', 'three', 'four', 'five'];
const lineW = arraySpliceW.splice(2, 2, 'new', 'ELEMENT');
console.log(arraySpliceW); // ["one", "two", "new", "ELEMENT", "five"]
console.log(lineW); // ["three", "four"]

const arraySpliceQ = ['one', 'two', 'three', 'four', 'five'];
const lineQ = arraySpliceQ.splice(3, 0, 'ELEMENT');
console.log(arraySpliceQ); // ["one", "two", "three", "ELEMENT", "four", "five"]
console.log(lineQ); // []


// reverse() - сортирует массив в обратном порядке.
const arrayRev = ['one', 'two', 'three', 'four', 'five'];
const rev = arrayRev.reverse();
console.log(rev); // ["five", "four", "three", "two", "one"]


// concat() - cоздает и возвращает новый массив, содержащий элементы исходного массива, и значения всех переданных аргументов.
const arrayConcat = ['one', 'two', 'three', 'four', 'five'];
const conc = arrayConcat.concat('six', 'seven');
const concAr = arrayConcat.concat(['six', 'seven', 'eight']);
console.log(conc); // ["one", "two", "three", "four", "five", "six", "seven"]
console.log(concAr); // ["one", "two", "three", "four", "five", "six", "seven", "eight"]


// indexOf() - возвращает номер (index) искомого элемента в массиве. Если элемент не найден, то вернет -1.
// lastIndexOf() - выполнфет то же самое, но поиск начинается с конца.
const arrayIndex = ['one', 'two', 'three', 'four', 'five'];
console.log(arrayIndex.indexOf('three')); // 2
console.log(arrayIndex.indexOf('six')); // -1


// .....  ES6  ...... //

// SPREAD - оператор помогает как конкатенировать, так и копировать массив, при этом создается именно копия, а не 
// передача по ссылке.

// конкатенация
let arrayS = ['Angular', 'Rx'];
let newArr = ['React', ...arrayS, 'Vue'];
console.log(newArr); // ["React", "Angular", "Rx", "Vue"]

// копирование (полная копия)
let newArrW = ["React", "Angular", "Rx", "Vue"];
let fullCopy = [...newArrW];
console.log(fullCopy); // ["React", "Angular", "Rx", "Vue"]


// деструктуризация
let arrD = ['one', 'two', 'three'];
let [one, two, three] = arrD;
console.log(one); // one
console.log(three); // three

let oneD, twoD, rest;
[oneD, twoD] = [1, 2];
console.log(oneD); // 1
console.log(twoD); // 2

[oneD1, twoD1, ...rest] = [1, 2, 3, 4, 5];
console.log(oneD1); // 1
console.log(twoD1); // 2
console.log(rest); // [3, 4, 5]