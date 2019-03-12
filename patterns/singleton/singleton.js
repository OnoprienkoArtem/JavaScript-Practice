var Singleton = (function() {
    let instance;
    function createInstance() {
        return new Object('I am the instance');
    }
    return {
        init: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();

function run() {
    var instance1 = Singleton.init();
    var instance2 = Singleton.init();
    console.log('Equals ' + (instance1 === instance2);
};

run();