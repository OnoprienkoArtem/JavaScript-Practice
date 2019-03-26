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




};