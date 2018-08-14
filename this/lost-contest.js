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


//--------------------------------------
// СПОСОБЫ СОХРАНЕНИЯ НУЖНОГО КОНТЕКСТА



// --- сохранение this в переменную;
let user2_2 = {
    firstName: 'John',
    secondName: 'Hook',
    getFullName: function () {        
        const self = this;

        setTimeout(function () {
            console.log(`Full name: ${self.firstName} ${self.secondName}`);
        }, 2000);
    }
}
user2_2.getFullName(); //  Full name: John Hook



function Room2_2(type, area) {
    let self = this;
    this.area = area;
    this.type = type;

    function showInfo() {
        console.log(`Type of room: ${self.type}, area: ${self.area}`);
    }

    this.getFullDescription = function () {
        showInfo();
    }
}

const room1_2 = new Room2_2('Guest', 15);
room1_2.getFullDescription(); // Type of room: Guest, area: 15




// --- использование специальных методов; call(), apply(), bind()
// call() - вызывает функцию и позволяет передать в нее параметры один за другим через запятую;
// apply() - вызывает функцию и позволяет передать в нее параметры в виде массива;
// bind() - возвращает новую функцию, позволяет передать в нее параметры один за другим или в виде массива.

// методы помогают присвоить нужный контекст исполнения для функции.


// functionName.call(context, params);  // второй параметр не обязателен
// functionName.call(context, param1, param2, param3);  // второй параметр не обязателен

// functionName.apply(context, [param1, param2, param3]);  // второй параметр не обязателен

function RoomCall(type, area) {   
    this.area = area;
    this.type = type;

    function showInfo() {
        console.log(`Type of room: ${this.type}, area: ${this.area}`);
    }

    this.getFullDescription = function () {
        showInfo.call(this);
    }
}

const roomCall = new RoomCall('Guest1', 151);
roomCall.getFullDescription(); // Type of room: Guest1, area: 151



// -------------------------

function say(greeting) {
    console.log(`${greeting} ${this.firstName} ${this.lastName}`);
}

const person1 = { firstName: 'John', lastName: 'Jarvis'};
const person2 = { firstName: 'Paul', lastName: 'Johnson'};

say.call(person1, 'Hello'); // Hello John Jarvis
say.call(person2, 'Hi!'); // Hi! Paul Johnson

say.apply(person1, ['Hello']); // Hello John Jarvis
say.apply(person2, ['Hi!']); // Hi! Paul Johnson










