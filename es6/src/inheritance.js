class Task {
    constructor(title) {
        this._title = title;
        this.done = false;
        Task.count += 1;
        console.log('Создание задачи');
    };

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }


}








