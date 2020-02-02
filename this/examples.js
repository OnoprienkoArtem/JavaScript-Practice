function hello() {
    console.log('Hello', this);
}

const person = {
    name: 'John',
    age: 35,
    say: hello,
    sayHelloWindow: hello.bind(document),
    logInfo: function(job, phone) {
        console.group(`${this.name} info`);
        console.log(`Name: ${this.name}`);
        console.log(`Age is: ${this.age}`);
        console.log(`Job is: ${job}`);
        console.log(`Phone is: ${phone}`);
        console.groupEnd();
    }
}

person.say();// Hello {name: "John", age: 35, say: ƒ, sayHelloWindow: ƒ, logInfo: ƒ}
person.sayHelloWindow(); //Hello #document


const sara = {
    name: 'Sara',
    age: 50
}


// BIND
// метод bind возвращает новую функцию, не вызывает
const lenaLogInfo = person.logInfo.bind(sara, 'doctor', '22-333-111-55-66');
// person.logInfo.bind(sara, 'doctor', 'doctor')(); можно так вызвать

lenaLogInfo(); 
// если не передать параметры
// Sara info  Name: Sara / Age is: 50 / Job is: undefined / Phone is: undefined
// с параметрами
// Sara info  Name: Sara / Age is: 50 / Job is: doctor / Phone is: 22-333-111-55-66


// CALL - сразу вызывает
person.logInfo.call(sara, 'doctor', '22-333-111-55-66');
// Sara info  Name: Sara / Age is: 50 / Job is: doctor / Phone is: 22-333-111-55-66

// APPLY - сразу вызывает, также как и CALL но только параметры в массиве
person.logInfo.apply(sara, ['doctor', '22-333-111-55-66']);
// Sara info  Name: Sara / Age is: 50 / Job is: doctor / Phone is: 22-333-111-55-66


