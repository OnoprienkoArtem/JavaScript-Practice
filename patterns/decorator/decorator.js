(function() {
    var UserProfile = function(name) {
        this.name = name;
        this.login = function() {
            console.log("User: " + this.name + ' is logged in');
        };
    }

    var AdminProfile = function(user, isAdmin, loginType) {
        this.name = user.name;
        this.isAdmin = isAdmin;
        this.loginType = loginType;
        this.originalLogin = user.login;
        this.login = function() {
            console.log('Admin User: ' + this.name + ', Is admin: ' + this.isAdmin + ', Login type: ' + this.loginType);
        };
    }

    var user = new UserProfile('Connor');
    user.login();
    var decorateUser = new AdminProfile(user, true, 'OAuth');
    decorateUser.originalLogin();
    decorateUser.login();
}());