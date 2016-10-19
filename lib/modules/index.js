import React, {PropTypes} from 'react';
import { combineReducers } from 'redux';

import { ListView, listReducer} from './list';

export const rootReducer = combineReducers({
    items: listReducer
});


export class Root extends React.Component {
    render () {
        return (
            <main>
                <ListView></ListView>
            </main>
        );
    }
}
