// STRING

const user = 'John'; // литеральная нотация
// const user = String('windows');
const system = new String('windows');

console.log(typeof user); // string
console.log(typeof system); // object
//  \n new line

console.log(system.length); // длинна строки, нумерация начинается с 1
console.log(system.toLocaleLowerCase());
console.log(system.toLocaleUpperCase());




const text = 'Life is good, life is great';
const key = 'life';

const firstPos = text.indexOf(key); // находит номер строки и возвращает номер позиции, нумерация с 0
console.log(firstPos); //14 - index match

const secondPos = text.indexOf('bad'); // если не находит то вернет -1
console.log(secondPos); // -1 - not found

const positon = text.lastIndexOf('is'); // поиск с конца строки, но нумерация сначала
console.log(positon); // 22
// можно указать второй не обязательный параметр, с какого символа искать


const language = ' JavaScriot ';
console.log(language);
const trimLanguage = language.trim(); // Удаляет пробелы с начала и конца строки

console.log(trimLanguage); // 'JavaScriot'




// substr(); - возвращает строку начиная с указаной позиции и указаной длинны.
const str = 'Life is good';
const subString = str.substr(8, 4);
console.log(subString); //good
const longString = str.substr(3);
console.log(longString); //e is good


// substring() - возвращает строку начиная с и до указанной позиции.
const substrString = str.substring(5, 7);
console.log(substrString); //is

const substrString1 = str.substring(-2);
console.log(substrString1); //минус интерпретируется как 0


// slice() - возвращает строку начиная с и до указанной позиции, есть различие в работе с отрицательными числами.
// если отрицательные то считает с конца строки



//split() - разделает строку на массив по указанному разделителю (разделитель не входит в результат)
const sepateted = text.split(',');
console.log(sepateted);



//concat() - объединфет строку в одну и возвращает новую.
const good = 'Life is good';
const great = 'life is great';
const song = 'Song: ';

const text1 = song.concat(good, ', ', great);
console.log(text1);
// or
const text2 = good + ', ' + great;
console.log(text2);
//лучше использовать +


// шаблонные строки ES6 - способ создания строковых литералов.
const name = 'John';
console.log(`Hello ${name}`);

const nameW = 'Life is good, life is great';

function songName(words) {
    const song = 'Good Song:';
    return `${song} ${words}`;
}

console.log(`Now you are listening ${songName(nameW)}`);





//NUMBER
const num = 35;
const bigNumber = new Number(55);

console.log(typeof num); // numv=ber
console.log(typeof bigNumber); // object


new Number('55'); // 55
new Number('string');  //NaN

Number.isNaN() // - определяет, является ли переданное в функцию значение NaN;
Number.isFinite() // - определяет, является ли переданное в функцию значение конечным числом; (infinite)
Number.parseInt() // - преобразовывает строку в число посимвольно;
Number.parseFloat() // - преобразовывает строку в десятичное число с плавающей точкой;
Number.isInteger() // - определяет, является ли переданное значение целым числом и возвращает true или false;




//BOOLEAN
const bool = false;
// const objBool = Boolean(false);
const objBool = new Boolean(false);

console.log(typeof bool); // boolean
console.log(typeof objBool); // object 

//'', 0, null, false, NaN, undefined = false





//DATE - объект, который используется для работы с датой и временем.
// число миллисекунд от 1 января 1970
const currentDate = new Date(); // верет текущий день -> Sun Dec 30 2018 23:22:33 GMT+0200 (EET)
console.log(currentDate);


// получаем
// getFullYear(); - год в формате 4 цифр
// getMonth(); - вернет номер месяца но с 0 (январь - 0)
// getDate(); - число месяца 1 - 31
// getHours();
// getMinuter();
// getTime(); - милисикунды с 1 января 1970


// задаем
// setFullYear();
// и т.д.



// MATH - объект, который содержит в себе множество математических констант и функций;

// Math.floor();
// Math.ceil();
// Math.round();

// Math.max();
// Math.min();