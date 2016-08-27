import React  from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';

import rpc from './utils/rpc';
import { DB, openDB } from './utils/db';

import { ListView, listitems } from './modules/list';
import { loadList } from './actions';

const logger = createLogger();
const path = '/Users/sharat/projects/github/webhooked/db';

const levelAdminReducers = combineReducers({
    listitems
});


const store = createStore(
    levelAdminReducers,
    applyMiddleware(logger)
);

rpc.on('ready', () => {
    render(
        <Provider store={ store }>
            <ListView></ListView>
        </Provider>,
        rootElement
    );

    open(path);
});

rpc.on('open_folder', open);

const rootElement = document.getElementById('maincontainer');

async function open(path) {
    const lvl = new DB(openDB(path));
    let list = await lvl.find();
    store.dispatch(loadList(list));
}


