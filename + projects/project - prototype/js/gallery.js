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