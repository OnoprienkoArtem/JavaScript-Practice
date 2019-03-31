const utils = {
    inheritance: function (parent, child) {
        const tempChild = child.prototype;
        child.prototype = Object.create(parent.prototype);
        child.prototype.constructor = child;

        for (let key in tempChild) {
            if (tempChild.hasOwnProperty(key)) {
                child.prototype[key] = tempChild[key];
            }
        }
    },
    
    'format': function (data) {
        return data.map(item => {
            return {
                url: this.formatUrl(item.url),
                name: this.formatName(item.name),
                id: item.id,
                description: this.formatDescription(item.description),
                date: item.date,
                dateString: this.formatDate(item.date)
            }
        })
    },

    'formatName': function (name) {
        name = name.trim();
        return name[0].toUpperCase() + name.slice(1, name.length).toLowerCase();
    },

 
};