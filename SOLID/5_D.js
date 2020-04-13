// DEPENDENCY INVERSION PRINCIPLE


class Fetch {
    request(url) {
        return Promise.resolve('data from fetch');
    }
}

class LocalStorage {
    get() {
        return 'Data from local storage';
    }
}

class Database {
    constructor() {
        // this.fetch = new Fetch();
        this.localStorage = new LocalStorage();
    }

    getData() {
        // return this.fetch.request();
        return this.localStorage.get('ls_key');
    }
}

const db = new Database();

console.log(db.getData());
