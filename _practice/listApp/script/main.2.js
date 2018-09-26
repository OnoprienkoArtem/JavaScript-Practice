var itemsListComponent = (function () {
    const userList = document.querySelector("#user-list");
    const selectAll = document.querySelector("#select-all");
    const statsInfo = document.querySelector("#stats");

    const emailDropdown = document.querySelector("#dropdown-email");
    const roleDropdown = document.querySelector("#dropdown-role");
    const search = document.querySelector("#inputSearch");
    const nextBtn = document.querySelector("#next-page");
    const backBtn = document.querySelector("#back-btn");

    const detailsView = document.querySelector("#details-view");
    const mainView = document.querySelector("#main-view");
    const detailsItems = document.querySelector("#details-items");

	let usersListData = [];
	let pageConfig = {
		itemsPerPage : 10,
		currentPage: 0
	}

    function prepareUsersListData() {
        usersListData = listService.duplicateArray(users, 1);
    }

    function initListeners() {
        selectAll.addEventListener("click", selectAllItems);
        userList.addEventListener("click", tableLineHandler);

        search.addEventListener("keyup", searchHandler);
        emailDropdown.addEventListener("click", sortingHandler);
        roleDropdown.addEventListener("click", sortingHandler);

        nextBtn.addEventListener("click", getNextPageHandler);
        backBtn.addEventListener("click", openMain);
    }
  
}())