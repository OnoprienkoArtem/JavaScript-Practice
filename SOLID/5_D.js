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

class FetchClient {
    constructor() {
        this.fetch = new Fetch();
    }

    clientGet(url) {
        return this.fetch.request(url);
    }
}

class LocalStorageClient {
    constructor() {
        this.localStorage = new LocalStorage();
    }

    clientGet(key) {
        return this.localStorage.get(key);
    }
}

class Database {
    constructor(client) {
        this.client = client;
    }

    getData(param) {
        return this.client.clientGet(param);
    }
}

// const db = new Database(new FetchClient());
// console.log(db.getData('fetch'));

const db = new Database(new LocalStorageClient());
console.log(db.getData('ls'));



// class Fetch {
//     request(url) {
//         return Promise.resolve('data from fetch');
//     }
// }
//
// class LocalStorage {
//     get() {
//         return 'Data from local storage';
//     }
// }
//
// class Database {
//     constructor() {
//         // this.fetch = new Fetch();
//         this.localStorage = new LocalStorage();
//     }
//
//     getData() {
//         // return this.fetch.request();
//         return this.localStorage.get('ls_key');
//     }
// }
//
// const db = new Database();
//
// console.log(db.getData());
