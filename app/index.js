const electron = require('electron');
const createRPC = require('./rpc');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

function createWindow () {
    mainWindow = new BrowserWindow({width: 800, height: 600});

    mainWindow.loadURL(`file://${__dirname}/index.html`);
    mainWindow.webContents.openDevTools();

    mainWindow.on('closed', function () {
        mainWindow = null;
    });

    const rpc = createRPC(mainWindow);
    mainWindow.rpc = rpc;
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    //if (process.platform !== 'darwin') {
    app.quit();
    //}
});

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});
