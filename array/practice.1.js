let arr = [3, 5, 2, 7, 9, 1, 4, 6, 8, 10];
for (let i = 0; i < arr.length; i++) {    
    for (let j = 0; j < arr.length; j++){
        if (arr[i] < arr[j]) {
            let max = arr[i];
            arr[i] = arr[j];
            arr[j] = max;
        }
    }
}
console.log(arr);  //  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function bubbleSort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
        }
    }
    return arr;
}

console.log(bubbleSort(arr));




