// STRING

const user = 'John';
const system = new String('windows');

//  \n new line

console.log(system.length);
console.log(system.toLocaleLowerCase());
console.log(system.toLocaleUpperCase());




const text = 'Life is good, life is great';
const key = 'life';

const firstPos = text.indexOf(key);
console.log(firstPos); //14 - index match

const secondPos = text.indexOf('bad');
console.log(secondPos); // -1 - not found

const positon = text.lastIndexOf('is');
console.log(positon); // 22



const language = ' JavaScriot ';
console.log(language);
const trimLanguage = language.trim(); // Удаляет пробелы с начала и конца строки

console.log(trimLanguage);



// substr(); - возвращает строку начиная с указаной позиции и указано длинны.
const str = 'Life is good';
const subString = str.substr(8, 4);
console.log(subString); //good
const longString = str.substr(3);
console.log(longString); //e is good


// substring() - возвращает строку начиная с и до указанной позиции
const substrString = str.substring(5, 7);
console.log(substrString); //is

const substrString1 = str.substring(-2);
console.log(substrString1); //минут интерпретируется как 0


// slice() - возвращает строку начиная с и до указанной позиции, есть различие в работе с отрицательными числами.
// если отрицательные то считает с конца строки

//split() - разделает строку на массив по указанному разделителю
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


// шаблонные строки
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

new Number('55'); // 55
new Number('string');  //NaN



//BOOLEAN
const bool = false;
const objBool = new Boolean(false);

console.log(typeof bool); // boolean
console.log(typeof objBool); // object 

//'', 0, null, false, NaN, undefined = false


//DATE
// число миллисекунд от 1 января 1970
const currentDate = new Date();
console.log(currentDate);

// getFullYear
// getMonth
// getDate
// getHours
// getMinuter
// getTime();
// 


// MATH

// Math.floor();
// Math.ceil();
// Math.round();

// Math.max();
// Math.min();


