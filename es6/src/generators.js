// function* range(start, end) {
//     let current = start;
//     while (current <= end) {
//         yield current++;
//     }
// }

// for (let num of range(1, 10)) {
//     console.log(num);
// }

// function* generate() {
//         console.log('start');
//         yield 1;
//         yield 2;
//         yield 3;
//         console.log('finish');
//     }

// function generate() {
//     let currunt = 1;
//     console.log('Start');
//     return {
//         [Symbol.iterator]() {
//             return {
//                 next() {
//                     let result = { value: undefined, done: true };

//                     if (currunt <= 3) {
//                         result.value = currunt;
//                         result.done = false;
//                         currunt++;
//                     } else {
//                         result.value = undefined;
//                         result.done = true;
//                         console.log('Finish');
//                     }
//                     return result;
//                 }
//             }
//         }
//     }
// }


// console.log(typeof generate);

// let iterator = generate()[Symbol.iterator]();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());


let numbers = {
    * range(start, end) {
        let current = start;
        while (current <= end) {
            yield current++;
        }
    }
};

for (let num of numbers.range(1, 10)) {
    console.log(num);
}