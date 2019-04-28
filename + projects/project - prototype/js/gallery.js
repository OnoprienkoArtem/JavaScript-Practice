/* 
 *  Схематическое изображение класса Галереи
 */

const BaseGalleryModule = function () {
    // code
    // this.view = view;
};

BaseGalleryModule.prototype = {
    init: function () {
        this.hide()
    },

    show: function () {
        this.view.wrapper.classList.remove('hide');
    },

    hide: function () {
        this.view.wrapper.classList.add('hide');
    }
};


const ExtendedGalleryModule = function (data, view) {
    this.view = view;
    this.galleryData = data.slice();
    this.viewData = [];

    BaseGalleryModule.apply(this);
};


ExtendedGalleryModule.prototype = {
    init: function () {
        // BaseGalleryModule.prototype.init.apply(this);
        BaseGalleryModule.prototype.init.apply(this);
        this.initListeners()
    },

    initListeners: function () {
        this.view.addBtn.addEventListener('click', this.addImage.bind(this));
        this.view.sortSelector.addEventListener('change', this.onChangeSorting.bind(this));
        this.view.container.addEventListener('click', this.deleteGalleryItem.bind(this));
    },

    addImage: function addImg() {
        if (this.galleryData.length > 0) {
            this.viewData.push(this.galleryData.pop());
            this.viewData = this.sortData(this.viewData);
            this.renderGallery(this.viewData);
            this.checkIfCanAddMore();
        } else {
            alert('Больше нет элементов в галерее!')
        }
    },

    sortData: function sortData(data) {
        let key;
        let direction = 1;

        function sortMethod(a, b) {
            if (a[key] > b[key]) {
                return direction;
            } else if (a[key] < b[key]) {
                return -direction;
            } else {
                return 0;
            }
        }
        switch (this.view.sortSelector.value) {
            case '1':
                key = 'name';
                direction = 1;
                return data.sort(sortMethod);
            case '2':
                key = 'name';
                direction = -1;
                return data.sort(sortMethod);
            case '3':
                key = 'date';
                direction = -1;
                return data.sort(sortMethod);
            case '4':
                key = 'date';
                direction = 1;
                return data.sort(sortMethod);
        }
    },

    checkIfCanAddMore: function () {
        if (this.galleryData.length === 0) {
            this.view.addBtn.setAttribute('disabled', '');
        } else {
            this.view.addBtn.removeAttribute('disabled');
        }
    },

    renderGallery: function renderGallery(data) {
        let outHtml = '';

        data.forEach(item => {
            outHtml += `<div class="col-sm-3 col-xs-6 card">\
                            <img src="${(item.url)}" alt="${(item.name)}" class="img-thumbnail">\
                            <div class="info-wrapper">\
                                <div class="text-muted">${(item.name)}</div>\
                                <div class="text-muted top-padding">${(item.description)}</div>\
                                <div class="text-muted">${(item.dateString)}</div>\
                                <div class="btn btn-danger delete" data-id="${item.id}">Удалить</div>\
                            </div>\
                        </div>`
        });
        this.view.container.innerHTML = outHtml;
    },

    onChangeSorting: function onChangeSorting() {
        this.viewData = this.sortData(this.viewData);
        this.renderGallery(this.viewData);
    },

    deleteGalleryItem: function deleteGalleryItem(event) {
        if (!event.target.getAttribute("data-id")) {
            return;
        }
        const id = event.target.getAttribute("data-id");
        let deletedIndex = -1;
        this.viewData.forEach((item, index) => {
            if (item.id === +id) {
                deletedIndex = index;
            }
        });

        this.galleryData = this.galleryData.concat(this.viewData.splice(deletedIndex, 1)); // [itemForDelete]
        this.renderGallery(this.viewData);
        this.checkIfCanAddMore();
    }
};

utils.inheritance(BaseGalleryModule, ExtendedGalleryModule);