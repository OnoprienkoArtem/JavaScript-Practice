class Task {
    constructor(title = Task.getDefaultTitle()) {
        this.title = title;
        this._done = false;
        Task.count += 1;
        console.log('Создание задачи');
    }

    get done() {
        return this._done === true ? 'Выполнена' : 'Не выполнена';
    }

    set done(value) {
        if (value !== undefined && typeof value === 'boolean') {
            this._done = value;
        } else {
            console.log('Ошибка! Укажите значение true или false');
        }
    }

    complete() {
        this.done = 1;
        console.log(`задача "${this.title}" выполнена`);
    }

    static getDefaultTitle() {
        return 'Задача';
    }
}

Task.count = 0;

let task = new Task('убрать комнату');

console.log(typeof Task);
console.log(typeof task);
console.log(task instanceof Task);

console.log(task.title);

task.complete();
console.log(task.done);
