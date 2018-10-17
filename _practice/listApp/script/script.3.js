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


}