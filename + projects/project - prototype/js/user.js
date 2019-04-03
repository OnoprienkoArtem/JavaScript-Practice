const UserModule = function (view) {
    this.view = view;
    this.isShow = false;
};

UserModule.prototype = {
    init: function () {
        this.hide();
        this.view.showPasswordButton.addEventListener('click', event => {
            event.preventDefault();
            if (!this.isShow) {
                this.view.userPassword.setAttribute('type', 'text');
                this.view.showPasswordButton.innerText = 'Скрыть пароль';
                this.isShow = true;
            } else {
                this.view.userPassword.setAttribute('type', 'password');
                this.view.showPasswordButton.innerText = 'Показать пароль';
                this.isShow = false;
            }
        });
    },

    show: function () {
        this.view.userLogin.value = this.view.loginInput.value;
        this.view.userPassword.value = this.view.passwordInput.value;
        this.view.container.classList.remove('hide');
    },

    hide: function () {
        this.view.container.classList.add('hide');
    }

};