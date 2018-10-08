let arr = [3, 5, 2, 7, 9, 1, 4, 6, 8, 10, 55];
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





function binarySearch(arr, search) {
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] >= search) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return arr[right] === search ? right : -1;
}

console.log(binarySearch(arr, 10));  // 9
console.log(binarySearch(arr, 11));  // -1



console.log('indexOf => ', arr.indexOf(5)); // 4
console.log('indexOf => ', arr.indexOf(10)); // 9
console.log('indexOf => ', arr.indexOf(11)); // -1



// линейная сложность O(N);
function findMax(arr) {
    let max = -Infinity;

    for(let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findMax(arr)); // 10