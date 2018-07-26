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


