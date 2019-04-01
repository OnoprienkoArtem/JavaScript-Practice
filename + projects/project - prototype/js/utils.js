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

    'formatDescription': function (description) {
        if (description.length >= 15) {
            return description.slice(0, 15) + "...";
        }
        return description;
    },

    'formatUrl': function (url) {
        if (url.startsWith("http://")) return url;
        return "http://" + url;
    },

    'formatUtil': function (value, shift = 0) {
        if (+value < 10 - shift) {
            return `0${value + shift}`;
        }
        return `${value}`;
    },

    'formatDate': function (date) {
        date = parseInt(date); // ? NaN

        if (Number.isNaN(date) === true) date = +new Date();

        if (window.moment) {
            console.log("Found moment.js!");
            return moment(date).format("YYYY/MM/DD HH:mm");
        } else {
            date = new Date(date);
            return `${date.getFullYear()}/\
                    ${this.formatUtil(date.getMonth(), 1)}/\
                    ${this.formatUtil(date.getDate())} \
                    ${this.formatUtil(date.getHours())}:\
                    ${this.formatUtil(date.getMinutes())}`;
        }
    } 
};