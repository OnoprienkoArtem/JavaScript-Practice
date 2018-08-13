//  ФУНКЦИЯ-КОНСТРУКТОР - функция с помощью которой можно создавать новый объект с определенными 
//  заданными свойствами и методами. Нужно перед вызовом функции поставить оператор new, иммено он
//  позволяет инициализировать новый объект.

function Foo() {}

const Foo2 = new Foo(); // создаем новый объект

console.log(typeof Foo2); // object


// ФК - может содержать свойства, которые при инициализации экзмпляра объекта, будут принадлежать этому объекту,
// для этого используем this.


function Room(name, area) {
    this.area = area;
    this.name = name;

    this.showInfo = function() {  // как публичный метод
        console.log(`Type of room: ${this.name}, area: ${this.area}`);
    }
}

const guestRoom = new Room('Guest', 12);
console.log(guestRoom); // Room {area: 12, name: "Guest"}

console.log(guestRoom.area); // 12
console.log(guestRoom.name); // Guest

const room1 = new Room('Bedroom', 15);
const room2 = new Room('Bath', 10);

room1.showInfo(); // Type of room: Bedroom, area: 15
room2.showInfo(); // Type of room: Bath, area: 10