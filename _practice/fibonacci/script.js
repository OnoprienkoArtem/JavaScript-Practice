
// рекурсивное решение
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5));
console.log(fibonacci(10));

//console.log(fibonacci(10));  будет выполнятся 50000 лет


