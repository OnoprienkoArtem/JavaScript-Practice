function* range(start, end) {
    let current = start;
    while (current <= end) {
        yield current++;
    }
}

for (let num of range(1, 10)) {
    console.log(num);
}

function* generate() {
        console.log('start');
        yield 1;
        yield 2;
        yield 3;
        console.log('finish');
    }




