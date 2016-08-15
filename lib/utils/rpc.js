export default class Client {
    constructor () {
        const electron = window.require('electron');
        const EventEmitter = window.require('events');
        this.emitter = new EventEmitter();
        this.ipc = electron.ipcRenderer;
        this.ipcListener = this.ipcListener.bind(this);
    }

    emit(ch, data) {

    }

    ipcListener (event, { ch, data }) {
        this.emitter.emit(ch, data);
    }
}
