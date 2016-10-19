import './style.scss';

import React  from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';

import rpc from './utils/rpc';
import { DB, openDB } from './utils/db';

import { loadList } from './modules/list';

import { rootReducer, Root } from './modules';

const logger = createLogger();
const path = '/Users/sharat/projects/github/webhooked/db';


const store = createStore(
    rootReducer, compose(
        applyMiddleware(logger),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

rpc.on('ready', () => {
    render(
        <Provider store={ store }>
            <Root></Root>
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
