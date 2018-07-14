let languages = ['JS', 'PHP', 'Python', 'Ruby'];

// let js = languages[0];
// let php = languages[1];
// let py = languages[2];
// let rb = languages[3];

// let [js, php, py, rb] = languages;

let [js, php, py, rb] = ['JS', 'PHP', 'Python', 'Ruby'];

console.log(js, php, py, rb);


// let score = [3, 4, 5];
// let [low, mid, high] = score;
// console.log(low, mid, high);


// let score = [3, 4, 5, 6, 7];
// let [low, ...rest] = score;
// console.log(low, rest);


// let score_1 = [3, 5, [6, 7]];
// let [low, mid, [high, higher]] = score_1;
// console.log(low, mid, high, higher);


function computeScore([low, mid]) {
    console.log(low, mid);
}
// computeScore([5, 6]);


function getScore() {
    return [1, 2, 3]
}

let score_2 = getScore();
console.log(score_2);
let [low, mid, high] = getScore();
console.log(low, mid, high);


let yes = 'YES';
let not = 'NOT';

[yes, not] = [not, yes];

console.log('yes is', yes);
console.log('not is', not);
