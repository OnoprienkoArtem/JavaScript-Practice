// Open close principle

class Square {
    constructor(size) {
        this.type = 'square';
        this.size = size;
    }
}


class Circle {
    constructor(radius) {
        this.type = 'circle';
        this.radius = radius;
    }
}

class AreaCalculator {
    constructor(shapes = []) {
        this.shapes = shapes;
    }

    sum() {
        return this.shapes.reduce((acc, shape) => {
            if (shape.type === 'circle') {
                acc += (shape.radius ** 2) * Math.PI
            } else if (shape.type === 'square') {
                acc += shape.size ** 2;
            }
            return acc;
        }, 0)
    }
}


const calc = new AreaCalculator([
    new Square(10),
    new Circle(1),
    new Circle(5)
]);

console.log(calc.sum());  //  181.68140899333463
