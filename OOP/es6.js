// Класс в ES6 это обертка на механизмом прототипов.

// новый синтаксис
class Car {
    constructor(brand) {
        this.brand = brand;
        this._wheels = 4;
    }

    drive() {
        console.log('Car is on road');
    }

    static info() {
        console.log('Class for crating cars.');
    }

    get wheels() {
        console.log(this._wheels);
    }

    set wheels(value) {
        this._wheels = value;
    }

}

const bmw = new Car('M5');
bmw.drive();
bmw.info(); // Uncaught TypeError

Car.info(); // Class for crating cars.

bmw.wheels; // 4
bmw.wheels = 10;
bmw.wheels; // 10


// обычный синтаксис
// function Car(brand) {
//     this.brand = brand;
//     this.wheels = 4;
// };
// Car.prototype.drive = function() {
//     console.log('Car is on road');
// }
// const bmw = new Car('M5');
// bmw.drive();


// Метод constructor - определяет функцию, которая представляет собой класс. Это специальный метод, который служит для создания
// и инициализации объектов, созданных с использованием ключевого слова class. Запуск этого метода происходит во время 
// инициализации нового экземпляря класса с помощью new. Фактически это аналог функции-конструктора.
// Все остальные методы, которые находятся внутри тела класса, помещаются в прототип объекта.
// В теле класса могут определятся только методы, все свойства определяются в методе constructor.


// Статические методы - это  методы самого класса, которые вызываются непосредственно на самом классе и принадлежат ему.
// нужны для определенных служебных задач

// гетеры и сетеры - свойства аксессоры (свойства доступа).



