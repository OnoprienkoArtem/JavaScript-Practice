(function () {

    const userList = document.querySelector("#user-list");
    const selectAll = document.querySelector("#select-all");
    const statsInfo = document.querySelector("#stats");

    const search = document.querySelector("#inputSearch");
    const emailDropdown = document.querySelector("#dropdown-email");
    const roleDropdown = document.querySelector("#dropdown-role");
    const nextBtn = document.querySelector("#next-page");

    let usersListData = [];
    let pageConfig = {
        itemsPerPage: 10,
        currentPage: 0
    }

    function prepareUsersListData() {
        usersListData = listService.duplicateArray(users, 1);
    }

    function initListeners (){
		selectAll.addEventListener("click", selectAllItems);
		userList.addEventListener("click", selectTableLine);

		search.addEventListener("keyup", searchHandler);
		emailDropdown.addEventListener("click", sortingHandler);
		roleDropdown.addEventListener("click", sortingHandler);
		nextBtn.addEventListener("click", getNextPageHandler);
	}

    function selectAllItems() {
        let checkboxes = userList.querySelectorAll("input[type=checkbox]");
        // checkboxes.forEach(function(item){
        // 	selectAll.checked ? item.checked = true: item.checked = true;
        // });
        checkboxes.forEach(item => selectAll.checked ? item.checked = true : item.checked = false);
    }


});