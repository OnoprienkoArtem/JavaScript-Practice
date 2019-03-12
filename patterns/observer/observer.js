const Subject = function() {
    this.observers = [];

    this.subscribeObserver = observer => {
        this.observers.push(observer);
    }

    this.notifyObserver = (observer, data) => {
        let index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers[index](data);
        }
    }

    this.notifyObservers = data => {
        this.observers.forEach(observer => {
            observer(data);
        });
    }
};

const subject = new Subject();
subject.subscribeObserver(data => {
    console.log('Notification: ' + data);
});

subject.subscribeObserver(() => {
    console.log('Do other stuff');
});

subject.notifyObservers('msg');