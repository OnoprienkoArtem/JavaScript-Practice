// WINDOW

// window.innerWidth - ширина области содержимого окна браузера.
// window.innerHeight - высота области содержимого окна браузера.
// window.outerWidth - внешняя ширина браузера, включая все элементы интерфейса.
// window.outerHeight - внешняя высота браузера, включая все элементы интерфейса.

// window.pageXOffset - число пикселей, на которое документ был прокручен по горизонтали.
// window.pageYOffset - число пикселей, на которое документ был прокручен по вертикали.

// все выше перечисленные свойства доступны только для чтения.


// window.scrollBy() - прокручивает страницу к заданным координатам;
window.scrollBy(0, 100); // прокрутить страницу на 0 пикселей по горизонтали и 100 по вертикали

// window.scrollTo() - прокручивает страницу на заданное количество координат;
window.scrollTo(0, 100); // прокрутить страницу к позиции 0 пикселей по горизонтали и 100 по вертикали




// SCREEN

// screen - объект который содержит информацию о экране клиента.

// screen.width - возвращает полную ширину экрана.
// screen.height - возвращает полную высоту экрана.

// screen.availWidth - возвращает ширину экрана доступную для контента, исключая таскбары.
// screen.availHeight - возвращает высоту экрана доступную для контента, исключая таскбары.




// LOCATION
// location - объект, который содержит информацию про текущий URL.

// location.href - полный адрес (URL) текущей страницы.
// location.origin - содержит протокол, хост и порт текущего URL.
// location.hostname - доменное имя (хоста).
// location.pathname - строка пути после имени хоста.
// location.protocol - текущий веб протокол.

// методы объекта location:
// location.assign() - загружает новую страницу, URL передано в метод.
// location.replace() - заменит текущую страницу на страницу по указанному URL. (стерается история)
// location.reload() - перезагружает страницу по текущему URL. (если передать true то страница загрузится с сервера, 
// если false то с кеша, если не передать то как false).



// HISTORY - объект содержит истоию URL посещенных пользователем.

// history.length - количество URL сохраненных в истории. (макс 50)

// методы history:
// history.forward() - перейти на следующий URL из списка истории посещения.
// history.back() - перейти на предыдущий URL из списка истории посещений.
// history.go() - перейти на конкретный URL из списка историй посещения, относительно текущей страницы.
history.go(3); // на три страницы вперед относительно текущей.
history.go(-3); // на три страницы назад относительно текущей.



// COOKIE and WEB STORAGE

// cookie - данные о пользователе которые хранятся в браузере и передаются на сервер.
// вызываются на объекте document, а не window.
// маскимальные размер куки - 4Kb.

// установить куки
document.cookie = 'username=John; expires=Thu, 20 Dec 2017 11:00';

let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 1);

let expireDate = currentDate.toUTCString();
console.log(expireDate);
// дата для следующего дня от текущего.





// Web storage - место для локального хранения данных в браузере. (не передаются на сервер)

// localStorage - позволяет хранить данные локально без ограничений по времени и могут быть удалены только с помощью JS.
// sessionStorage - позволяет хранить данные локально на протяжении одной сессии (пока не закроется вкладка браузера).
// маскимальные размер Web storage - 5Mb.


// localStorage.setItem() - добавить значение в хранилище.
// localStorage.getItem() - получение значения из хранилища по ключу.
// localStorage.removeItem() - удалить значение по ключу.
// localStorage.clear() - очистит хранилище.

localStorage.getItem('lv');
localStorage.setItem('lv', '12345');
localStorage.removeItem('lv');
localStorage.clear();





// Timing (setTimeout and setInterval)

// serTimeout() - позволяет вызвать переданную в метод функцию через определенный отрезок времени.

// setInterval() - позволяет вызвать функцию повторно с указанным временным интервалом.

setTimeout(function() {
    console.log('Time is out!');
}, 3000);

setTimeoutT(() =>  console.log('Time is out!'), 3000);

setTimeout(setTimeFunction, 3000);

const setTimeFunction = function() {
    console.log('Time is out!');
}


setInterval(function () {
    console.log('interval!');
}, 500);


clearTimeout(setTimeoutT);
clearInterval(setInterval);