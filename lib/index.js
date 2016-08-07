import React  from 'react';
import { render } from 'react-dom';
import Store from './store';

render(
    <div className="myDiv">Hello Electron</div>,
    document.getElementById('maincontainer')
);
