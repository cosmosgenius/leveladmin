const { dialog } = require('electron');


module.exports = [
    {
        label: 'Application',
        submenu: [
            {
                role: 'about'
            },
            {
                role: 'quit'
            }
        ]
    },
    {
        label: 'File',
        submenu: [
            {
                label: 'Open',
                accelerator: 'CmdOrCtrl+O',
                click: (menuItem, focusedWindow) => {
                    const list = dialog.showOpenDialog({properties: ['openDirectory']});
                    if(list && list.length) {
                        focusedWindow.rpc.emit('open_folder', list[0]);
                    }
                }
            }
        ]
    },
    {
        label: 'View',
        submenu: [
            {
                label: 'Reload',
                accelerator: 'CmdOrCtrl+R',
                click (item, focusedWindow) {
                    if (focusedWindow) focusedWindow.reload();
                }
            },
            {
                label: 'Toggle Developer Tools',
                accelerator: process.platform === 'darwin' ? 'Alt+Command+I' : 'Ctrl+Shift+I',
                click (item, focusedWindow) {
                    if (focusedWindow) focusedWindow.webContents.toggleDevTools();
                }
            },
            {
                type: 'separator'
            },
            {
                role: 'resetzoom'
            },
            {
                role: 'zoomin'
            },
            {
                role: 'zoomout'
            },
            {
                type: 'separator'
            },
            {
                role: 'togglefullscreen'
            }
        ]
    },
    {
        role: 'window',
        submenu: [
            {
                role: 'minimize'
            },
            {
                role: 'close'
            }
        ]
    },
];
