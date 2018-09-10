
var config = (function(){
	
	let sortingConfig = {
		"A": page => {
			page.sort(listService.sortEmailAsc); 
			return page;
		},
		"Z": page => {
			page.sort(listService.sortEmailDesc); 
			return page;
		},
		"Admin": page => {
			return page.filter(listService.filterAdminRole)
		},
		"User": page => {
			return page.filter(listService.filterUserRole)
		},
		"Find": page => {
			let exp = new RegExp(event.target.value, "i")
			return page.filter(item => {
				return exp.test(item.name);
			})
		},
	}

    return {
        sortingConfig: sortingConfig
    }
}());