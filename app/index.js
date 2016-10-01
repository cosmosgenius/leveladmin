const { app, Menu, BrowserWindow } = require('electron');
const createRPC = require('./rpc');
const menutpl = require('./menu');
const devtools = require('./devtools');

let mainWindow;

function createWindow () {
    app.commandLine.appendSwitch('js-flags', '--harmony');
    mainWindow = new BrowserWindow({width: 800, height: 600});

    if(process.env.NODE_ENV === 'development') {
        devtools.initTools().then(()=>{
            mainWindow.webContents.openDevTools();
        });
    }

    mainWindow.loadURL(`file://${__dirname}/index.html`);

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
