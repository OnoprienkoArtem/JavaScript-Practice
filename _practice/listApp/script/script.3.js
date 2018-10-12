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

}