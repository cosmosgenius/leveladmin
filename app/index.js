const { app, Menu, BrowserWindow } = require('electron');
const createRPC = require('./rpc');
const menutpl = require('./menu');

let mainWindow;

function createWindow () {
    mainWindow = new BrowserWindow({width: 800, height: 600});

    mainWindow.loadURL(`file://${__dirname}/index.html`);
    mainWindow.webContents.openDevTools();

    mainWindow.on('closed', function () {
        mainWindow = null;
    });

    const menu = Menu.buildFromTemplate(menutpl);
    Menu.setApplicationMenu(menu);

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
