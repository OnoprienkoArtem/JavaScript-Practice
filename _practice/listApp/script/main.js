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

    function selectTableLine(event) {
        //let tableLines = userList.querySelectorAll("tr");
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
            let filterFunction = (page) => {
                let exp = new RegExp(event.target.value, "i")
                return page.filter(item => {
                    return exp.test(item.name);
                })
            }
            buildUsersList(filterFunction);
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

		if (sortingType=="A") {
			let sortingFunction = (page) => {
				page.sort(listService.sortEmailAsc); 
				return page;
			}
			buildUsersList(sortingFunction);

		}
		if (sortingType=="Z") {
			let sortingFunction = (page) => {
				page.sort(listService.sortEmailDesc); 
				return page;
			}
			buildUsersList(sortingFunction);		
		}
		if (sortingType=="Admin") {
			let filterFunction = (page) => {
				return page.filter(listService.filterAdminRole)
			}
			buildUsersList(filterFunction)	
		}
		if (sortingType=="User") {
			let filterFunction = (page) => {
				return page.filter(listService.filterUserRole)
			}
			buildUsersList(filterFunction);			
		}
	}

    function getNextPageHandler(event) {
		event && event.preventDefault();
		buildUsersList();
		if (isMaxPage()){
			blockNextPage();	
			countStats();
		} 
	}

	function isMaxPage() {
		return (pageConfig.currentPage * pageConfig.itemsPerPage) >= usersListData.length;
	}

	function blockNextPage() {
		nextBtn.classList.add("disabled");
	}

	function countStats() {
		let stats = usersListData.reduce(function (sum, item) {
			(item.role == "Admin") ? sum.admins++ : sum.users++;
			return sum;
		}, { admins: 0, users: 0 });
		statsInfo.innerHTML = `Статистика системы. Админов: ${stats.admins}, Пользователей: ${stats.users}`;
	}

	function getNextPage() {
		let start = pageConfig.itemsPerPage * pageConfig.currentPage;
		let end = pageConfig.itemsPerPage + start;
		pageConfig.currentPage++;
		return usersListData.slice(start, end);
	}

	function buildUsersList(filterSortFunction) {
		let page = getNextPage();
		filterSortFunction && (page = filterSortFunction(page));
		let result = page.map(item => listService.tableTemplate(item));
		userList.innerHTML += result.join("");
		listService.initTooltip();
	}

	function init() {
		initListeners()
		prepareUsersListData()
		buildUsersList();
	}
	init();


});