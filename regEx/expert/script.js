// /patern/flag - указывают на начало и конец регулярного выражения, подобно кавычкам для обозначения строк.

//  значение флагов (модификаторов):
// i - производит поиск независимо от регистра и символов;
// g - искать все совпадения симврлов во всей строке (если флаг нет - ищем только первое совпадение);
// m - многострочный режим, используется если строка, в которой осуществляется поиск, содержит переносы строк.

// ^ - первый символ;
// . - один случайный символ;
// $ - последний символ;
// d - числовой символ;
// {} - указывается сколько раз может встречаться;
// [] - диапазон;

 
let r1 = /test/gi;
let r2 = /test/g;
let r3 = /^t.t$/gi; // первый символ t, далее идет один случайный символ, последний символ t
let r4 = /\d{2-3}/i; // числовой символ может встреаться от 2 до 3 раз
let r5 = /[0-9]/; // любое число которой попадает в диапазон от 0 до 9 
let r6 = /\d+/ig; //


// способы создания регулярного выражения

// - используя литерал регулярного выражения /exp/;
// - вызывают функцию конструктор RegExp;


let str = 'Time to start';
let exp = /^s.{3}t$/i;
console.log(exp.test(str));  // false - так как наша строка не начинается с указанного первого символа s.

let str1 = 'Time to start';
let exp1 = /s.{3}t$/i; // убрали ^
console.log(exp1.test(str1)); // true

// test() - возвращает false/true


let exp41 = new RegExp('start', 'i');
// этот подход часто используется если шаблон заранее не известен. 
// То есть может каким то образом вычислятся либо передаваться как параметр.
function findText(pattern) {
    let str = 'Time to start';
    let exp = new RegExp(pattern, 'i');
    return exp.test(str);
}
findText('^s.{3}t$');
findText('Time');


// методы для работы с регулярными выражениями:
// три метода из объекты STRING
// два метода из объекта REGEXP

// STRING

// str.search(reg); - возвращает позицию искомого элемента в строке или -1 если ничего не найдено.
// способен искать только первое совпадение.
// узнает где именно в тексте встречается искомая фраза.
let str62 = 'Time to start';
let exp63 = /to/g;
let exp64 = /r/g;
console.log(str62.search(exp63)); // 5
console.log(str62.search(exp64)); // 11



// str.match(reg); - возвращает массив совпадений и некоторую дополнительную информацию.
// если совпадений не было то вернет null;
// механизм отличается в зависимости от использования флага 'g';
let str73 = 'My name is Tim.';
let pattern74 = /t.m/i;
let res75 = str73.match(pattern74);
console.log(res75); // ["Tim", index: 11, input: "My name is Tim.", groups: undefined]

let str78 = 'My name is Tim. What is your name?';
let pattern79 = /name/g;
let res80 = str78.match(pattern79);
console.log(res80); // ["name", "name"] обычный масив всех совпадений, каждый по индексу, и lenght



// str.replace(reg, replacement); - осуществляет поиск строки или регулярного выражения с 
// последующей заменой на другую строку.
let str87 = 'My name is Tim.';
let pattern88 = /t.m/i;
let res89 = str87.replace(pattern88, 'John');
console.log(res89); // My name is John.

let str92 = 'My name is Tim. What is your name?';
let pattern93 = /name/g;
let res94 = str92.replace(pattern93, 'second name');
console.log(res94); // My second name is Tim. What is your second name?

// есть еще механизм, который позволяет производить не простую замену  го и более сложную модификацию строк.
// $& - вставить в результат все найденное совпадение;
// $` - вставить в результат часть строки до совпадения;
// $' - вставить в результат часть строки после совпадения;
// $n - вставить в результат n-ое по счету совпадение;

let str103 = 'My name is Tim Rot.';
let pattern104 = /t.m/i;
let res105 = str103.replace(pattern104, "===Bruce, $'===");
console.log(res105); // My name is ===Bruce,  Rot.=== Rot.


let str109 = 'My name is Tim Rot.';
let pattern110 = /t.m/i;
let res111 = str109.replace(pattern110, "Bruce =$1=");
console.log(res111);



// REGEXP methods
// regexp.test(str); - проверяет есть ли хоть одно совпадение в искомой строке с регулярным выражением (true/false)
let str118 = 'Time to start';
let exp119 = /to/g;
console.log(exp119.test(str118)); // true


// regexp.exec(str); - возвращает массив совпадений и дополнительную информацию. если нет совпадений то возвращает null
// механизм отличается в зависимомти от использования флага 'g'
let str125 = 'My name is Tim. What is your name?';
let exp126 = /is/;
console.log(exp126.exec(str125)); // ["is", index: 8, input: "My name is Tim. What is your name?", groups: undefined]

//  если использовать флаг 'g', модифицирует внутри регулярного выражения свойство lastIndex. Используется для поиска в цикле.
let str130 = 'My name is Tim. What is your name?';
let exp131 = /is/g;
let find;

while ((find = exp131.exec(str130)) !== null) {
    let msg = 'Нашли =>' + find[0] + '. Продолжим поиск с индекса ' + exp131.lastIndex;
    console.log(find);
    // ["is", index: 8, input: "My name is Tim. What is your name?", groups: undefined]
    // ["is", index: 21, input: "My name is Tim. What is your name?", groups: undefined]
    console.log(msg);
    // Нашли =>is. Продолжим поиск с индекса 10
    // Нашли =>is. Продолжим поиск с индекса 23
}




// СИНТАКСИС


// Якоря

// ^ - имкомое выражение находится в начале текста  --- /^h/i.test(«hello»)
// $ - Искомое выражение должнонаходиться в конце текста --- / o$ / i.test(«hello»)
// . - Соответствуют любому одному символу --- /h…o /i.test(«hello») , /^h.l/i.test(«hello»), /^h.l$/i.test(«hello»)
// \b - Соответсввует границам слова --- /\bnot\b/i.test(«not me»)
// \B - Не соответсввует границам слова --- /\Bis\B/i.test(«Name is Cruise»)


// классы символов

// \s - Пробел и пробельные символы --- /is\s/i.test(«Name is Tom»), /is\s\w/i.test(«Name is Tom»);
// \S - Не пробел --- /\Sis\S/i.test(«Cruise»);
// \d - Цифра, Эквивалентно диапазону[0-9] --- /\d\sfloor/i.test(«2 floor»), /\d\sf/i.test(«2 floor»);
// \D - Не цифра, Эквивалентно диапазону[^0-9] --- /\D\sfloor/i.test(«second floor»);
// \w - Буква(включая цифры и знак _) --- /.\w./i.test(«[2]»);
// \W - Не буква --- /.\W./i.test(«[&]»);



// Квантификаторы

// * - Предыдущий символ повторяется 0 или больше раз --- /is*\s/i.test(«Cruise»); 
// + - Предыдущий символ повторяется 1 или больше раз --- /cruiz+e/i.test(«Cruise»), /cruiz+e/i.test(«Cruizzze»); 
// ? - Предыдущий символ повторяется 0 или 1 раз --- /cruis?e/i.test(«Cruise»), /cruiz?e/i.test(«Cruizzze»); 
// {n} - Предыдущий символ повторяется определенное количество раз --- /cruis{3}e/i.test(«Cruissse»), /^c.{4}e$/i.test(«Cruise»); 
// {n,} - Предыдущий символ повторяется как минимум n раз --- /cruis{2,}e/i.test(«Cruissse»); 
// {n,m} - Предыдущий символ повторяется от n до m раз --- /cruis{1,3}e/i.test(«Cruissse»);



// Группа и диапазон 

// | - Совпадает или символ слева или символ справа --- /is\s(Smith | John)/i.test(«My name is Smith»), /is\s(Smith | John)/i.test(«My name is Alex»);
// () - Найти выражение в скобках и запомнить это выражение --- /(is){2}/i.exec(«My name isis Cruise»), /(is){2}/i.exec(«My name is Cruise») // false;
// [] - Входит в диапазон --- /[0-9]{3}/i.test(«ab123cdef»); 
// [^] - Не входит в диапазон --- /[^a-z]{3}/i.test(«1234aaa5678»), /[^a-z]{3}/i.test(«1234aa5678»);
// x(?=y) - Соответствует‘x’ только если за ‘x’ следует ‘y’. --- /John\s(?=Smith | Alex)/i.test(«John Smith»), /John\s(?=Smith | Alex)/i.test(«John Dou») //false;
// x(?!y) - Соответствует ‘x’ только если за ‘x’ НЕ следует ‘y’. --- /John\s(?!Smith | Alex)/i.test(«John Dou»);



// если в тексте нужно найти спец символ его обязательно нужно экранировать \  ->   \^




let strings = [
    'http://domenName.net/',
    'https://domenName.net/',
    'this is not a URL',
    'https://google.com/',
    '123461',
    'https://domenName.net/?s=google',
    'http://js name net',
    ' http://domenName.net.url/'
];

let regex = /^http\w?:\/\/[\w\/?.&-=]+$/;
let result = [];

for (let i = 0; i < strings.length; i++) {
    if (regex.test(strings[i])) {
        result.push(strings[i]);
    }
}

console.log(result); // (4) ["http://domenName.net/", "https://domenName.net/", "https://google.com/", "https://domenName.net/?s=google"]