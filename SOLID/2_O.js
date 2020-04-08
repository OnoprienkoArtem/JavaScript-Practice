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
                acc += shape.radius ** 2;
            }
            return acc;
        }, 0)
    }
}
