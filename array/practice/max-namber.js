// жадная сьратегия (жадный алгоритм) - на каждом шаге выбирать наибольшую цифру, присоеденять ее к результирующему числу, 
// удалачть эту цифру из исходного массива





// O(n*log(n))
// сортируем массив, переварачиваем массив
let arr = [3, 1, 7, 9, 9, 5];

function maxNumbers(arr) {
    arr.sort(); // [1, 3, 5, 7, 9, 9]
    let result = '';

    for (let index = arr.length - 1; index >= 0; index--) {
        result += arr[index];        
    }
    return result;
}

console.log(maxNumbers(arr)); // 997531


