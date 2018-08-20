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






