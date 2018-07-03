const a = {
    aa: 1,
    ab: 2
};

console.log(a.toString());
console.log(a.valueOf());

console.dir(Object.keys(a));
console.log(Object.values(a));

a.ac = 3;
console.log(Object.keys(a));
console.log(Object.values(a));

Object.defineProperty(a, 'ad', { // all false on default
    value: 50,
    writable: true,
    enumerable: false,
    configurable: true
});

console.log(a);
console.log(Object.keys(a));

function foo() {
    'use strict';
    a.af = 100;
}
console.log(foo());
console.log(Object.keys(a));



Object.defineProperty(a, 'ai', {
    get() {
        return this._ai;
    },

    set(value) {
        if (value < 0) {
            throw new Error('Only positive allowed');
        }
        this._ai = value;
    }
});
console.log(a.ai);
a.ai = 1000;
console.log(a.ai);
a.ai = 100;
console.log(a.ai);
a.ai = -100;
console.log(a.ai);
