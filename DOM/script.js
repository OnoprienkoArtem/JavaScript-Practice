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




//НАВИГАЦИЯ по DOM дереву

// parentNode - получить доступ к родительскому элементу.
// childNodes - получить все дочерние элементы в виде коллекции.
// firstChild - получить первый дочерний элемент.
// lastChild - получить последний дочерний элемент.
// previousSibling - получить соседний элемент слева (выше по дереву).
// nextSibling - получить соседний элемент справа (ниже по дереву).


let elDom = document.getElementById('elementId');
console.log(elDom.childNodes);
console.log(elDom.parentNode);


// навигация по нодам с типом element 

// parentElement - получить доступ к родительскому элементу.
// children - получить все дочерние элементы в виде коллекции.
// firstElementChild - получить первый дочерний элемент.
// lastElementChild - получить последний дочерний элемент.
// previousElementSibling - получить соседний элемент слева (выше по дереву).
// nextElementSibling - получить соседний элемент справа (ниже по дереву).

let elDomEl = document.getElementById('elementId');
console.log(elDomEl.children);
console.log(elDomEl.parentElement);






// DOM свойства и методы

// методы для работы с атрибутами:
// element.hasAttribute() - выполняет проверку на наличие атрибута(возвращает true или false).
// element.getAttribute() - получение значения арибута.
// element.setAttribute() - установка значения атрибута.
// element.removeAttribute() - удаление атрибута.

const element_1 = document.getElementById('main');
let hasAttr = element_1.hasAttribute('style');
console.log(hasAttr); // true

element_1.style.height = '200px';
element_1.setAttribute('class', 'main_1 main_2');


if (hasAttr) {
    let button = document.querySelector('button');
    button.setAttribute('id', 'btn');
    // button.id = 'btn';
    let attrValue = button.getAttribute('id');
    // button.id
    console.log(attrValue);
}

// element_1.removeAttribute('style');
// hasAttr = element_1.hasAttribute('style');
// console.log(hasAttr); //false


// style
// .style.cssText - получить все стили в виде строки.
// getComputedStyle(); - получить все свойства стилей.
let elementS = document.querySelector('button');
let marginTopElem = getComputedStyle(elementS).marginTop;


// работа с классами
// className - получает список классов (в виде строки). 
console.log(element_1.className);

// classList - возвращает псевдомасси DOMTokenList состоящий из классов, которые присвоены элементу.
// это псевдомассив имеет несколько специальных методов:
// element.classList.add() - добавление нового класса к элементу;
// element.classList.toggle() - если указанный класс присутствует, то будет удален, если нет то добавлен.
// element.classList.contains() - проверяет если такой класс (возвращает true или false).
// element.classList.remove() - удаляет указанный класс.


console.log(element_1.classList);

element_1.classList.add('new-class', 'new-class-2');
console.log(element_1.className);

element_1.classList.remove('new-class-2');
console.log(element_1.className);



// работа с HTML содержимым

// innerHTML - получает или устанавливает разметку дочерних элементов относительно элемента, на котором было применено свойство.
console.log(element_1.innerHTML); // <button type="button" id="btn">BUTTOn</button>

let divElement = document.getElementById('innerId');
divElement.innerHTML = '<span>Inner span</span>';


// outerHTML - получает или устанавливает разметку элемента, на котором было применено свойство, включая его дочерние елементы.
// !!!!!!!!!  лучше избегать  !!!!!!!!!!!!!!!!
console.log(element_1.outerHTML);
// <div id="main" style="background-color: rgb(51, 51, 51); height: 200px;" class="main_1 main_2 new-class">
//     <button type="button" id="btn">BUTTOn</button>
// </div>




// идентификация нод 
// tagName - определяет имя HTML тега (только для нод типа element)
// nodeName - определяет имя ноды.

for (let index = 0; index < element_1.childNodes.length; index++) {
    console.log(element_1.childNodes[index].nodeName);
}
// #text   - из-за переноса строки
// BUTTON
// #text   - из-за переноса строки

for (let index = 0; index < element_1.childNodes.length; index++) {
    console.log(element_1.childNodes[index].tagName);
}
// undefined
// BUTTON
// undefined





// размеры и позиционирование элементов

// element.clientHeight - высота элемента в пикселях, включая (padding и margin), но не (border).
// element.clientWidth - ширина элемента в пикселях, включая (padding и margin), но не (border).
// element.offsetHeight - высота элемента в пикселях, включая (padding и border), но не (margin).
// element.offsetWidth - ширина элемента в пикселях, включая (padding и border), но не (margin).

// element.offsetTop - позиция элемента в пикселях, от верхней части, относительно ближнего родительского элемента.
// element.offsetLeft - позиция элемента в пикселях, от левой части, относительно ближнего родительского элемента.





// СОЗДАНИЕ И ВСТАВКА DOM элементов 

// document.createElement() - создает ноду типа element.
// document.createTextNode() - создает ноду типа text.

// element.appendChild() - добавляет элемент как дочерний в родительский. (если есть то добавляет последним).
// element.insertBefore() - вставляет дочерний элемент перед указанным.

const elemBtn = document.getElementById('main');

const btn = document.createElement('button');
const btnText = document.createTextNode('My button');
btn.id = 'button-1';
btn.disabled = 'disabled';
btn.appendChild(btnText);
elemBtn.appendChild(btn);

const newDiv = document.createElement('div');
newDiv.innerHTML = 'some text before';
const randomBtn = document.getElementById('button-1');

elemBtn.insertBefore(newDiv, randomBtn); // или   elemBtn.appendChild(newDiv);



// element.textContent - свойство, которое помогает получить или установить текстовое значение.(не преобразовывается в теги)



// element.cloneNode() - метод для клонирования ноды.

const cloneBtnFull = elemBtn.cloneNode(true); // глубокая копия со всеми внутренними
cloneBtnFull.id = 'button-full';
console.log(cloneBtnFull);

const cloneBtn = elemBtn.cloneNode(false); // не глубокая копия
cloneBtn.id = 'button-2';
console.log(cloneBtn);




// element.removeChild() - удаляет дочерний элемент из родительского. (возвращают удаленные елементы)
// element.remove() - удаляет непосредственно тот элемент, на котором вызван метод.
// element.replaceChild() - вставляет новый элемент вместо старого. (возвращают удаленные елементы)

const elemMain = document.getElementById('main');
const mainBtn = document.querySelector('button');
elemMain.removeChild(mainBtn);


const elementR = document.getElementById('elementId');
elementR.remove();


const newDiv1 = document.createElement('div');
const description = document.getElementById('description');
elemMain.replaceChild(newDiv1, description);