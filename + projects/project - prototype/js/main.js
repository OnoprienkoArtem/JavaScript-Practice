/* 
 *  Схема инициализации приложения
 */

const loginView = {
    alertBox: document.getElementById('alertBox'),
    loginInput: document.getElementById('inputEmail'),
    passwordInput: document.getElementById('inputPassword'),
    signButton: document.getElementById('signButton'),
    userPageButton: document.getElementById('userPageButton'),
    galleryButton: document.getElementById('galleryButton'),
    logOutButton: document.getElementById('logOutButton'),
    container: document.getElementById('loginContainer')
};

const galleryView = {
    container: document.getElementById('gallery'),
    sortSelector: document.getElementById('sort-selector'),
    addBtn: document.getElementById('play'),
    wrapper: document.getElementById('galleryContainer')
};

const userView = {
    userLogin: document.getElementById('userLogin'),
    userPassword: document.getElementById('userPassword'),
    showPasswordButton: document.getElementById('showPasswordButton'),
    container: document.getElementById('userContainer'),
    loginInput: document.getElementById('inputEmail'),
    passwordInput: document.getElementById('inputPassword')
};

const dataCopy = utils.format(data.slice());

const validatorModule = new ValidatorModule();

// const galleryModule = new BaseGalleryModule(galleryView);
const galleryModule = new ExtendedGalleryModule(dataCopy, galleryView);

const userModule = new UserModule(userView);

const loginModule = new LoginModule(validatorModule, galleryModule, userModule, loginView);
loginModule.initComponent();