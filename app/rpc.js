const { EventEmitter } = require('events');
const { ipcMain } = require('electron');

class Server extends EventEmitter {
    constructor (win) {
        super();
        this.win = win;
        this.ipcListener = this.ipcListener.bind(this);
        this.id = 'mainwindow_signal';
        ipcMain.on(this.id, this.ipcListener);

        this.wc.on('did-finish-load', () => {
            this.wc.send('init', this.id);
        });
    }

    get wc() {
        return this.win.webContents;
    }

    emit (ch, data) {
        this.wc.send(this.id, {ch, data});
    }

    ipcListener (event, { ev, data }) {
        super.emit(ev, data);
    }

    destroy () {
        this.removeAllListeners();
        this.wc.removeAllListeners();
        if (this.id) {
            ipcMain.removeListener(this.id, this.ipcListener);
        }
    }
}

module.exports = function createRPC(win) {
    return new Server(win);
};
