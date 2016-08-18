
export function openDB(path) {
    const level = window.require('level');
    return level(path, {
        'valueEncoding': 'json'
    });
}

function promiseFromCallback(fn){
    return new Promise((resolve, reject) => {
        fn((err, value) => {
            if(err) return reject(err);
            resolve(value);
        });
    });
}

export class Store {
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

    find(options) {
        return new Promise((resolve, reject) => {
            const stream = this.db.createReadStream(options);
            let result = [];
            const onData = (data) => {
                result.push({
                    key: data.key,
                    value: data.value
                });
            };

            const onEnd = () => {
                resolve(result);
            };

            stream
                .on('error', reject)
                .on('end', onEnd)
                .on('data', onData);
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

    isOpen() {
        return this.db.isOpen();
    }

    isClosed() {
        return this.db.isClosed();
    }
}
