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
    }
];
