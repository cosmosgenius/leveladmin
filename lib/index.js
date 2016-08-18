import React  from 'react';
import { render } from 'react-dom';
import rpc from './rpc';
import { Store, openDB } from './store';

import Tm from './test';

render(
    <div className="myDiv">Hello Electron
        <Tm></Tm>
    </div>,
    document.getElementById('maincontainer')
);

// rpc.on('ready', () => {
//     debugger;
// });

rpc.on('open_folder', async function(path){
    const lvl = new Store(openDB(path));
    let list = await lvl.find();
    console.log(list);
    list.forEach((data)=> {
        console.log(data.key, data.value);
    });
});
