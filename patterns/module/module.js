// патерн "МОДУЛЬ" помогает изолировать разные части логики приложения от глобального контекста для 
// избегания конфликтов и ошибок.

// Модуль создается с помощью обячной функции.

// первый способ создание - самовызывающаяся функция.

(function() {
    const numbers = [1, 77, 312, 134, 511, 61, 227];
    function filterNumber() {
        let newNumber = numbers.filter(number => number < 100);
        console.log(newNumber);
    }
    filterNumber();
}()); // [1, 77, 61]


// необязательно все переьенные определять внутри Модуля, значения можно передать как параметры, внутр него.

(function (array) {
    const numbers = array;

    function filterNumber() {
        let newNumber = numbers.filter(number => number < 100);
        console.log(newNumber);
    }
    filterNumber();
}([1, 77, 312, 134, 511, 61, 227])); // [1, 77, 61]







