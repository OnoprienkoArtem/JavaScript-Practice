
// рекурсивное решение - очень медленный алгоритм
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5)); 
console.log(fibonacci(10)); // 55

//console.log(fibonacci(100));  будет выполнятся 50000 лет



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



// мемоизация
var n = 100;
var arrMemo = Array(n + 1);
for (var j = 0; j < arrMemo.length; j++) {
    arrMemo[j] = -1;
}

function memo(n, arr) {
    if (arr[n] != -1) return arr[n];    
    if (n <= 1) return n;

    var result = memo(n - 1, arr) + memo(n - 2, arr);
    arr[n] = result;

    return result;
}

console.log(memo(n, arrMemo)); // 354224848179262000000
