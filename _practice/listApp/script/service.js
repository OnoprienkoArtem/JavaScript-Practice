var listService = (function () {

    function duplicateArray(arr, count) {
        let res = [];
        for (let i = 0; i <= count; i++) {
            res = res.concat(arr.map(a => Object.assign({}, a)))
        }
        return res;
    }

    function hideElements(elementArray) {
        elementArray.forEach(function (element) {
            element.classList.add("hide");
        })
    }

    function showElements(elementArray) {
        elementArray.forEach(function (element) {
            element.classList.remove("hide");
        })
    }

    function sortEmailAsc(a, b) {
        return a.email > b.email ? 1 : -1;
    }

    function sortEmailDesc(a, b) {
        return a.email < b.email ? 1 : -1;;
    }

    function filterAdminRole(item) {
        return item.role == "Admin";
    }

    function filterUserRole(item) {
        return item.role == "User";
    }

 

    return {
        duplicateArray: duplicateArray, 
        hideElements: hideElements,
        showElements: showElements,
        sortEmailDesc: sortEmailDesc,
        sortEmailAsc: sortEmailAsc,
    }
}());

