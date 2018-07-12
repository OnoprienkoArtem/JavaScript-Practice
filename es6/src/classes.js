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


}

