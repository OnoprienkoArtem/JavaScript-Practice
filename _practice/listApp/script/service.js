var listService = (function () {

    function duplicateArray(arr, count) {
        let res = [];
        for (let i = 0; i <= count; i++) {
            res = res.concat(arr.map(a => Object.assign({}, a)))
        }
        return res;
    }

 

    return {
        duplicateArray: duplicateArray,
   
    }
}());

