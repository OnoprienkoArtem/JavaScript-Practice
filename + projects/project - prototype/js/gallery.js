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