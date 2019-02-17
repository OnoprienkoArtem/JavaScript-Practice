// патерн "МОДУЛЬ" помогает изолировать разные части логики приложения от глобального контекста для 
// избегания конфликтов и ошибок.

// Модуль создается с помощью обычной функции.

// первый способ создание - самовызывающаяся функция.

(function() {
    const numbers = [1, 77, 312, 134, 511, 61, 227];
    function filterNumber() {
        let newNumber = numbers.filter(number => number < 100);
        console.log(newNumber);
    }
    filterNumber();
}()); // [1, 77, 61]


// необязательно все переменные определять внутри Модуля, значения можно передать как параметры, внутр него.

(function (array) {
    const numbers = array;

    function filterNumber() {
        let newNumber = numbers.filter(number => number < 100);
        console.log(newNumber);
    }
    filterNumber();
}([1, 77, 312, 134, 511, 61, 227])); // [1, 77, 61]



// следующий способ создания Модуля - предоставление объектного интерфейса.
// возвращаем (формируем) объет который будет обладать определенными методами, 
// к которым мы можем обратиться через точку

const calculate = (function() {
    const numbers = [31, 42, 5, 34, 8];

    return {
        multiply: function() {
            let result = numbers.reduce((accumulator, number) => {
                return accumulator * number;
            }, 1);
            console.log(result);
        },
        add: function() {
            let result = numbers.reduce((accumulator, number) => {
                return accumulator + number;
            }, 0);
            console.log(result);
        }
    }
})();

calculate.add();  //  120



// интерфейс - методы с которыми мы можем взаимодействоать из нутри
// интерфейс - функциональность, которую некоторый программный компонент предоставляет другим программным компонентам
// Интерфейс — «общая граница» между отдельными системами, через которую они взаимодействуют; 
// совокупность средств и правил, обеспечивающих взаимодействие отдельных систем

// calculator

const calculateR = (function() {
    let numbers = [];

    function setNumbers(...num) {
        num.forEach(n => numbers.push(n)); // заполняем массив значениями которые передали
    };

    function getNumbers() {
        console.log(numbers.toString());
    };

    function calculation(operand) {
        const start = numbers[0];
        const newNumbers = numbers.slice(1);

        let result = newNumbers.reduce((accumulator, number) => {
            if(operand === '+') {
                return accumulator + number;
            } else if(operand === '*') {
                return accumulator * number;
            } else {
                return null;
            }
        }, start);
        return result;
    };

    function multiplyNumbers(numbers) {
        let result = calculation('*');
        console.log(result);
    };

    function addNumbers(numbers) {
        let result = calculation('+');
        console.log(result);
    };

    return {
        setNumbers: setNumbers,
        getNumbers: getNumbers,
        multiply: multiplyNumbers,
        add: addNumbers
    }
})();

calculateR.setNumbers(31, 42, 5, 34, 8);
calculateR.add(); // 120
calculateR.getNumbers(); // 31,42,5,34,8



// интерфейс - как пользователь взаимодествует с устройством или с програмой.
// специальные методы мы можем вызывать вдругих частях программы

// приватные методы не доступны за пределами модуля

// как правило, переменные или константы внутри модуля не делают публичными, если небходимо получить 
// или установить значение можно с помощью специальных методов (get and set)