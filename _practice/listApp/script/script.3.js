var BasicList = function () {
    this.userList = document.querySelector("#user-list");
    this.selectAll = document.querySelector("#select-all");
    this.statsInfo = document.querySelector("#stats");

    this.emailDropdown = document.querySelector("#dropdown-email");
    this.roleDropdown = document.querySelector("#dropdown-role");
    this.search = document.querySelector("#inputSearch");
    this.nextBtn = document.querySelector("#next-page");
    this.backBtn = document.querySelector("#back-btn");

    this.detailsView = document.querySelector("#details-view");
    this.mainView = document.querySelector("#main-view");
    this.detailsItems = document.querySelector("#details-items");

    this.usersListData = [];
    this.pageConfig = {
        currentPage: 0
    }
}



BasicList.prototype = {

	prepareUsersListData: function () {
	    this.usersListData = listService.duplicateArray(users, 1);
	},
    
    initListeners: function () {
        this.selectAll.addEventListener("click", this.selectAllItems.bind(this));
        this.userList.addEventListener("click", this.tableLineHandler.bind(this));

        this.search.addEventListener("keyup", this.searchHandler.bind(this));
        this.emailDropdown.addEventListener("click", this.sortingHandler.bind(this));
        this.roleDropdown.addEventListener("click", this.sortingHandler.bind(this));

        this.backBtn.addEventListener("click", this.openMain.bind(this));
    },

    selectAllItems: function(){
		let checkboxes = this.userList.querySelectorAll("input[type=checkbox]");
		checkboxes.forEach(item => this.selectAll.checked ? item.checked = true : item.checked = false);
	},

    tableLineHandler: function (event) {
        let isButton = event.target.getAttribute("data-row-id");
        isButton ? this.openDetail(isButton) : this.selectTableLine(event);
    },

    openDetail: function (buttonId) {
        listService.hideElements([this.mainView]);
        listService.showElements([this.detailsView]);
        let user = this.usersListData.filter(item => item.id == buttonId);
        this.detailsItems.innerHTML = listService.detailsTemplate(user[0]);
    },

    openMain: function () {
        listService.hideElements([this.detailsView]);
        listService.showElements([this.mainView]);
    },

    selectTableLine: function (event) {
        let tableLines = event.currentTarget.querySelectorAll("tr");
        this.tableLines.forEach(item => item.classList.remove("table-active"));
        event.target.closest("tr").classList.add("table-active");
    },

    searchHandler: function (event) {
        event.preventDefault();
        let value = event.target.value;
        if (event.keyCode === 13 && (value.length == 0 || value.length > 2)) {
            this.pageConfig.currentPage = 0;
            this.userList.innerHTML = "";
            this.buildUsersList(config.sortingConfig["Find"]);
        }
    },

    sortingHandler: function (event) {
        event.preventDefault();
        event.currentTarget.querySelector("button").innerHTML = event.target.innerText;
        let sortingType = event.target.getAttribute("sorting-type");
        sortingType && this.applySortingMethod(sortingType);
    },
    
    applySortingMethod: function (sortingType) {
        this.pageConfig.currentPage = 0;
        this.userList.innerHTML = "";
        this.buildUsersList(config.sortingConfig[sortingType]);
    },
    
	getNextPage: function () {
	    return this.usersListData;
	},

    buildUsersList: function (filterSortFunction) {
        let page = this.getNextPage();
        filterSortFunction && (page = filterSortFunction(page));
        let result = page.map(item => listService.tableTemplate(item));
        this.userList.innerHTML += result.join("");
        listService.initTooltip();
    },

    initComponent: function () {
        this.initListeners()
        this.prepareUsersListData()
        this.buildUsersList();
    }
}

/*
	Paging Class
*/

var PagingList = function () {
    BasicList.apply(this);
    this.pageConfig = {
        itemsPerPage: 10,
        currentPage: 0
    }
}


PagingList.prototype = {

    initListeners: function () {
        BasicList.prototype.initListeners.apply(this);
        this.nextBtn.addEventListener("click", this.getNextPageHandler.bind(this));
    },

    getNextPageHandler: function (event) {
        event && event.preventDefault();
        this.buildUsersList();
        if (this.isMaxPage()) {
            this.blockNextPage();
            this.countStats();
        }
    },

    isMaxPage: function () {
        return (this.pageConfig.currentPage * this.pageConfig.itemsPerPage) >= this.usersListData.length;
    },

    blockNextPage: function () {
        this.nextBtn.classList.add("disabled");
    },

    countStats: function () {
        let stats = this.usersListData.reduce((sum, item) => {
            (item.role == "Admin") ? sum.admins++ : sum.users++;
            return sum;
        }, { admins: 0, users: 0 });
        this.statsInfo.innerHTML = `Статистика системы. Админов: ${stats.admins}, Пользователей: ${stats.users}`;
    },
    
    getNextPage: function () {
        let start = this.pageConfig.itemsPerPage * this.pageConfig.currentPage;
        let end = this.pageConfig.itemsPerPage + start;
        this.pageConfig.currentPage++;
        return this.usersListData.slice(start, end);
    }

}


listService.inheritance(BasicList, PagingList);