export default class Client {
    constructor () {
        const electron = window.require('electron');
        const EventEmitter = window.require('events');
        this.emitter = new EventEmitter();
        this.ipc = electron.ipcRenderer;
        this.ipcListener = this.ipcListener.bind(this);
        this.id = 'mainwindow_signal';
        this.ipc.on(this.id, this.ipcListener);
    }

    ipcListener (event, { ch, data }) {
        this.emitter.emit(ch, data);
    }

    on(ev, fn){
        this.emitter.on(ev, fn);
    }

    once(ev, fn){
        this.emitter.once(ev, fn);
    }

    emit(ch, data) {
        this.ipc.send(this.id, {ch, data});
    }

    removeListener (ev, fn) {
        this.emitter.removeListener(ev, fn);
    }

    removeAllListeners () {
        this.emitter.removeAllListeners();
    }

    destroy () {
        this.removeAllListeners();
        this.ipc.removeAllListeners();
    }
}
