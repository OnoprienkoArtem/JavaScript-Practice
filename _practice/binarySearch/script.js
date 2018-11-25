var arr = [1, 2, 3, 4, 5, 6, 7, 8];

function binarySearch(a, target) {
    debugger
    var low = 0;
    var high = a.length - 1;

    while (low <= high) {
        var middle = Math.floor(low + (high - low) / 2);

        if(target < a[middle]) {
            high = middle - 1;
        } else if(target > a[middle]) {
            low = middle + 1;
        } else {
            return middle;
        }
    }
    return -1;
}

console.log(binarySearch(arr, 3));