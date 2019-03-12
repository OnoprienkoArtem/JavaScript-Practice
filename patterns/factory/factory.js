var BMW = function () {
    this.type = 'fast';
};

var Porshe = function () {
    this.type = 'expencive';
};

var Mercedes = function () {
    this.type = 'cool';
};


function Factory() {
    this.createCar = function (model) {
        var car;
        if (model === 'bmw') {
            car = new BMW();
        } else if (model === 'porshe') {
            car = new Porshe();
        } else if (model === 'mercedes') {
            car = new Mercedes();
        }

        car.model = model;
        car.getInfo = function () {
            console.log(`This is ${this.model}. It's a ${this.type} car.`);
        }
        return car;
    }
}

let factory = new Factory();

let carItem = factory.createCar('mercedes');
carItem.getInfo(); // This is mercedes. It's a cool car.

let carItem = factory.createCar('bmw');
carItem.getInfo(); // This is bmw. It's a fast car.
