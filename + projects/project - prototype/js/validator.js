const ValidatorModule = function () {
    this.user = {
        login: 'admin@index.com',
        password: '12341234'
    };
};


ValidatorModule.prototype = {
    isValid: function isValid(user) {
        switch (this.isHasEmptyField(user)) {
            case 0:
                return {
                    status: false,
                    msg: 'Введите логин и пароль'
                };
            case 1:
                return {
                    status: false,
                    msg: 'Введите логин'
                };
            case 2:
                return {
                    status: false,
                    msg: 'Введите пароль'
                };
            case 3:
                return {
                    status: false,
                    msg: 'Логин не соответствует формату e-mail'
                };
            case 4:
                return {
                    status: false,
                    msg: 'Пароль должен быть не короче 8 символов'
                };
            case -1:
                return this.authorize(user) ?
                    {
                        status: true
                    } :
                    {
                        status: false,
                        msg: 'Неправильный логин или пароль'
                    }
        }
    },

    isHasEmptyField: function isHasEmptyField(user) {
        if (user.login && user.password) {
            if (this.checkEmail(user.login) && this.checkPassword(user.password)) {
                return -1;
            } else if (!this.checkEmail(user.login)) {
                return 3;
            } else if (!this.checkPassword(user.password)) {
                return 4;
            }
        }
        if (user.login) return 2;
        if (user.password) return 1;
        return 0;
    },

    authorize: function authorize(user) {
        return user.login === this.user.login &&
            user.password === this.user.password;
    },
    checkEmail: function (email) {
        const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRegExp.test(email);
    },

    checkPassword: function (password) {
        return password.length >= 8;
    }

};