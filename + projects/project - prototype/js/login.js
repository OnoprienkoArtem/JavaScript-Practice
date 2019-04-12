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

    initComponent: function () {
        this.gallery.init();
        this.userPage.init(this.getInputsValues());

        this.navBlock.map(el => el.classList.add('hide'));

        this.view.signButton.addEventListener('click', (event) => {
            event.preventDefault();
            const login = this.validateUserData();
            if (login.status) {
                this.navBlock.map(el => el.classList.remove('hide'));
                this.showGallery();
                this.showActiveRoute('gallery');
            } else {
                this.showAlert(login.msg);
            }
        });

        this.view.galleryButton.addEventListener('click', (event) => {
            event.preventDefault();
            this.userPage.hide();
            this.gallery.show();
            this.showActiveRoute('gallery');
        });

        this.view.userPageButton.addEventListener('click', (event) => {
            event.preventDefault();
            this.gallery.hide();
            this.userPage.show();
            this.showActiveRoute('user-page');
        });

        this.view.logOutButton.addEventListener('click', (event) => {
            event.preventDefault();
            this.navBlock.map(el => el.classList.add('hide'));
            this.gallery.hide();
            this.userPage.hide();
            this.clearInputsValues();
            this.view.container.classList.remove('hide');
        });  
    },

    validateUserData: function () {
        return this.validator.isValid(this.getInputsValues());
    },

    showGallery: function () {
        this.view.container.classList.add('hide');
        this.gallery.show();
    },

    showActiveRoute: function (route) {
        this.navBlock.map(el => el.classList.remove('active'));
        if (route === 'gallery') {
            this.view.galleryButton.classList.add('active')
        }
        if (route === 'user-page') {
            this.view.userPageButton.classList.add('active')
        }
    },
    

};