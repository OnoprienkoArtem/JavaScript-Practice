function hello() {
    console.log('Hello', this);
}

const person = {
    name: 'John',
    age: 35,
    say: hello,
    sayHelloWindow: hello.bind(document),
    logInfo: function(jop, phone) {
        console.group(`${this.name} info`);
        console.log(`Name: ${this.name}`);
        console.log(`Age is: ${this.age}`);
        console.log(`Job is: ${this.job}`);
        console.log(`Phone is: ${this.phone}`);
        console.groupEnd();
    }
}

person.say();// Hello {name: "John", age: 35, say: ƒ, sayHelloWindow: ƒ, logInfo: ƒ}
person.sayHelloWindow(); //Hello #document


const sara = {
    name: 'Sara',
    age: 50
}

const lenaLogInfo = person.logInfo.bind(sara, 'doctor', '2-333-111-55-33');

lenaLogInfo(); 
// Sara info  Name: Sara / Age is: 50 / Job is: undefined / Phone is: undefined