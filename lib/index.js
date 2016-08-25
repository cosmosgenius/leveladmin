import React  from 'react';
import { render } from 'react-dom';
import rpc from './rpc';
import { Store, openDB } from './store';

import List from './List';

// rpc.on('ready', () => {
//     debugger;
// });

rpc.on('open_folder', async function(path){
    const lvl = new Store(openDB(path));
    let list = await lvl.find();

    render(
        <List listitems={ list }></List>,
        document.getElementById('maincontainer')
    );
});
