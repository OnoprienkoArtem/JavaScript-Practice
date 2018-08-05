// самые наиболее встречающиеся события:
// click - клик мышью.
// mouseover - наведение мыши на элеиент.
// mousemove - перемещение куосора мыши.
// keypress - нажатие пользователем на клавишу на клавиатуре.
// scroll - прокручивание страницы.
// submit - отправка формы.
// focus - фокусировка на элементе input.
// blur - потеря элементом фокуса.
// resize - изменение размера окна.
// DOMContentLoaded - HTML загружен и обработан.

// назначение обработчика событий
// обработчиком событий является функция, которая выполняется после того, как событие произошло.




//------ 1. использование HTML атрибута события

// <button onclick="clickHanler()">button</button>
function clickHanler() {
    console.log('pressed button');
}
//  или
// <input type="text" onfocus="console.log('it works!')">




//------ 2. использование DOM-свойства - свойства в DOM, которые отвечают за события.

// <button>button</button>
const button = document.querySelector('button');
function clickButton() {
    console.log('pressed!');
}

button.onclick = clickButton; // устанавливаем ссылку на функцию !!!

// можно удалить обработчик события следующим способом
button.onclick = null;

// ЭТИ ДВА СПОСОБА СЧИТАЮТСЯ УСТАРЕВШИМИ, их не нужно использовать


//------ 3. использование addEventListener - современный способ назанчения события.
// принимает три параметра, два обязятельных, третий опциональный.
// первый - имя события, второй - функция обработчик, трейти стадия обработки события(всплытие или захват)

// <button>button</button>
const button = document.querySelector('button');

button.addEventListener('click', function() {
    console.log('clicked!');
});

// можно установить несколько обработчиков на один элемент.
// можно устанавливать на любые DOM элементы

window.addEventListener('resize', function() {
    console.log(window.innerWidth);
});


// example
const link2 = document.querySelector('#link2');
const input = document.querySelector('#input');

link2.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('click start');
    input.focus(); // програмно инициируем событие
    console.log('click end');
    console.log(event);
});
input.addEventListener('focus', function() {
    console.log('focus');
});




window.addEventListener('resize', resize);

function resize() {
    console.log(window.innerWidth);
}

window.removeEventListener('resize', resize);


// удаление обработчика событий
// метод removeEventListener - удаляет обработчик событий





// ------------- ПРИЕМЫ РАБОТЫ С СОБЫТИЯМИ --------------- //


// ПОРЯДОК РАБОТЫ СОБЫТИЙ
// третий параметр addEventListener
// если не указывать третий параметр - то метод воспринимает как false

// true - означает, что событие отработает на стадии захвата (capturing);
// false - означает, что событие отработает на стадии всплятия (bubbling);


// (bubbling) - в основном используется эта схема.
// ВСПЛЫТИЕ - когда инициализируется событие, обработчик срабатывает на элементе, на котором оно было проинициализировано,
// после чего событие, начинает подниматься вверх, к родительским элементам, и отрабатывать везде, где установлен
// обработчик на это же событие.


// <div id='first'>First div
//     <div id='second'>Second div
//         <div id='third'></div>Third div
//     </div>
// </div>

const div1 = document.querySelector('#first');
const div2 = document.querySelector('#second');
const div3 = document.querySelector('#third');

let handler = function(event) {
    alert(event.currentTarget.id);
}

div1.addEventListener('click', handler, false);
div2.addEventListener('click', handler);
div3.addEventListener('click', handler);


// (capturing)
// ЗАХВАТ - события "погружаються" сверху-вниз.
//  при такой обработке событий, все происходит с точностью наоборот, в отличии от всплытия, событие погружается от 
// родительского элемента вниз, до целевого, на котором событие было проинициализировано.


// <div id='first'>First div
//     <div id='second'>Second div
//         <div id='third'></div>Third div
//     </div>
// </div>

const div1 = document.querySelector('#first');
const div2 = document.querySelector('#second');
const div3 = document.querySelector('#third');

let handler = function (event) {
    alert(event.currentTarget.id);
}

div1.addEventListener('click', handler, true);
div2.addEventListener('click', handler, true);
div3.addEventListener('click', handler, true);




// полный цикл отработки событий состоит из трех фаз: 
// 1. захват или погружение (capturing),
// 2. достижение цели (target),
// 3. всплятие (bubbling).

// достижение цели - это сам факт того, что событие дошло до элемента, на котором оно было проинициализировано.





// EXAMPLE 

// <div id='one'>First div
//     <div id='two'>Second div
//         <div id='three'></div>Third div
//     </div>
// </div>

const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');

let msg = function (event) {
    console.log('type: ' + event.type);
    console.log('Target: ' + event.target.id); // на каком элементе произошло событие 
    console.log('current target: ' + event.currentTarget.id); // на каком элементе установлен обработчик
    console.log('---------------');
}

one.addEventListener('click', msg);
two.addEventListener('click', msg);
three.addEventListener('click', msg);



// объект EVENT

// --------------- 25-00
