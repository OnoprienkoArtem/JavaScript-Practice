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







};