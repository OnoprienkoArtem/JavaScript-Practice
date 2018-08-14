// случаи потери контекста в основном случаются при использовании внутренних функций или функций обратного вызова.

let user = {
    outerFunction: function() {
        console.log(this === user); // this === user

        function innerFunction() {
            console.log(this === user);  // this === window
        }

        innerFunction();
    }
}

user.outerFunction();
// true
// false

//----------------------------------
// пример потери контекста
let user2 = {
    firstName: 'John',
    secondName: 'Hook',
    getFullName: function() {
        setTimeout(function() {
            console.log(`Full name: ${this.firstName} ${this.secondName}`);
        }, 2000);
    }
}
user2.getFullName(); //  Full name: undefined undefined  


//---------------------------------


function Room(type, area) {
    this.area = area;
    this.type = type;

    function showInfo() {
        console.log(`Type of room: ${this.type}, area: ${this.area}`);
    }

    this.getFullDescription = function() {
        showInfo();
    }
}

const room1 = new Room('Guest', 15);
room1.getFullDescription(); // Type of room: undefined, area: undefined






















