function promiseFromCallback(fn){
    return new Promise((resolve, reject) => {
        fn((err, value) => {
            if(err) return reject(err);
            resolve(value);
        });
    });
}

class Store {
    constructor(db){
        this.db = db;
    }

    get(key) {
        return promiseFromCallback((cb) => {
            this.db.get(key, cb);
        });
    }

    put(key, value) {
        return promiseFromCallback((cb) => {
            this.db.put(key, value, cb);
        });
    }

    del(key) {
        return promiseFromCallback((cb) => {
            this.db.del(key, cb);
        });
    }

    close() {
        return promiseFromCallback((cb) => {
            this.db.close(cb);
        });
    }

    open() {
        return promiseFromCallback((cb) => {
            this.db.open(cb);
        });
    }

    *find() {
        const stream = this.db.createReadStream();
        let first = stream.read();
        if(first) yield first;

        let read = stream.read();
        while(read) {
            yield read;
            read = stream.read();
        }
    }
}

export default Store;
