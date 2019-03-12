var DOMControls = {
    getElement: function(selector) {
        if (typeof document.querySelector == 'function') {
            document.querySelector(selector);
        } else {
            document.getElementById(selector);
        }
    }
}

DOMControls.getElement('#wrapper');