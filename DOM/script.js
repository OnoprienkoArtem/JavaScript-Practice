//  document - глобальный объект
console.log(document);
console.log(document.head);

// nodeType - их 12 штук, основных 2.
// ELEMENT_NODE -> 1, любой тег HTML страницы.
// TEXT_NODE -> 3, текстовый элемент.



// поиск DOM элементов
// document.DocumentElement
// document.head
// document.body 


// document.getElementById(); - получение элемента по его атрибуту id.
const idElement = document.getElementById('elementId');
console.log(idElement); // <div id="elementId">element-id</div>


// document.getElementsByClassName(); - получение элемента по его атрибуту class.
const classElement = document.getElementsByClassName('elementClass');
console.log(classElement); 
// HTMLCollection(5) [div.elementClass, div.elementClass, div.elementClass, div.elementClass, div.elementClass]


// document.getElementsByTagName(); - получение элемента по тегу
const tegElement = document.getElementsByTagName('div');
console.log(tegElement);
// HTMLCollection(6) [div#elementId, div.elementClass, div.elementClass, div.elementClass, div.elementClass, div.elementClass, elementId: div#elementId]


// document.querySelectorAll(); - поиск по CSS селектору.
const listElements = document.querySelectorAll('#elementId ul li');
console.log(listElements); // NodeList(5) [li, li, li, li, li]

const listElements2 = document.querySelectorAll('.inner-four');
console.log(listElements2); // NodeList [div.inner-four]


// document.querySelector(); - поиск по CSS селектору, возвращает только первый найденный элемент.


//  element.closest() - метод, который выполняет поиск элемента выше по иерархии, который удовлетворяет заданный CSS селектор.
// (первый найденный и выполнение прерывается)
const element = document.getElementById('innerId');
let el = element.closest('.elementClass');
console.log(el);




























