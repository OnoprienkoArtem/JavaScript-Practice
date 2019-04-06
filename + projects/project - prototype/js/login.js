/* 
 *  Схематическое изображение класса Логин формы
 */

const LoginModule = function (validatorModule, galleryModule, userModule, view) {
    // let O = {};
    // this = O
    this.validator = validatorModule;
    this.gallery = galleryModule;
    this.userPage = userModule;
    this.view = view;
    this.navBlock = [
        this.view.userPageButton,
        this.view.galleryButton,
        this.view.logOutButton
    ];   
};

LoginModule.prototype = {

 

};
