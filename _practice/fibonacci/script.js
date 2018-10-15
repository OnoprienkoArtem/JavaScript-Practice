
// рекурсивное решение
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5)); 
console.log(fibonacci(10)); // 55

//console.log(fibonacci(10));  будет выполнятся 50000 лет



function fibEffective(n) {
    var arr = [];
    arr[0] = 0;
    arr[1] = 1;

    for (let index = 2; index <= n; index++) {
        arr[index] = arr[index - 1] + arr[index - 2];                
    }
    return arr[n];
}

console.log(fibEffective(10)); // 55
console.log(fibEffective(100)); // 54224848179262000000