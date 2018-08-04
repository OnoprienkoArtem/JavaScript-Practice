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
//  DOMContentLoaded - HTML загружен и обработан.

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


