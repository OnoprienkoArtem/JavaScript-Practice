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

    function selectAllItems() {
        let checkboxes = userList.querySelectorAll("input[type=checkbox]");
        checkboxes.forEach(item => selectAll.checked ? item.checked = true : item.checked = false);
    }

    function tableLineHandler(event) {
		let isButton = event.target.getAttribute("data-row-id");
		isButton ? openDetail(isButton) : selectTableLine(event);
	}

    function openDetail(rowId) {
        listService.hideElements([mainView]);
        listService.showElements([detailsView]);
        let user = usersListData.filter(item => item.id == rowId);
        detailsItems.innerHTML = listService.detailsTemplate(user[0]);
    }
    
    function openMain() {
        listService.hideElements([detailsView]);
        listService.showElements([mainView]);
    }

    function selectTableLine(event) {
        let tableLines = event.currentTarget.querySelectorAll("tr");
        tableLines.forEach(item => item.classList.remove("table-active"));
        event.target.closest("tr").classList.add("table-active");
    }

    function searchHandler(event) {
        event.preventDefault();
        let value = event.target.value;
        if (event.keyCode === 13 && (value.length == 0 || value.length > 2)) {
            pageConfig.currentPage = 0;
            userList.innerHTML = "";
            buildUsersList(config.sortingConfig["Find"]);
        }
    }
    
    function sortingHandler(event) {
        event.preventDefault();
        event.currentTarget.querySelector("button").innerHTML = event.target.innerText;
        let sortingType = event.target.getAttribute("sorting-type");
        sortingType && applySortingMethod(sortingType);
    }

    function applySortingMethod(sortingType) {
        pageConfig.currentPage = 0;
        userList.innerHTML = "";
        buildUsersList(config.sortingConfig[sortingType]);
    }

    function getNextPageHandler(event) {
        event && event.preventDefault();
        buildUsersList();
        if (isMaxPage()) {
            blockNextPage();
            countStats();
        }
    }

    
  
}())