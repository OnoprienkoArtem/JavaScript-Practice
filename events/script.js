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



