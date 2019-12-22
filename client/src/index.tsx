import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { Router } from 'react-router';
import { createHashHistory } from 'history';
import { syncHistoryWithStore } from 'mobx-react-router';
import 'antd/dist/antd.css';

import './i18n';

import { AppContainer } from './containers';
import { stores } from './stores';

/**
 * init
 */
const hashHistory = createHashHistory();
const history = syncHistoryWithStore(hashHistory, stores.routing);

// import App from './containers'

// const history = syncHistoryWithStore(hashHistory, stores.routingStore);
const rootElement = document.getElementById('app');

if (rootElement) {
    ReactDOM.render(
        <Provider {...stores}>
            <Router history={history}>
                <AppContainer />
            </Router>
        </Provider>,
        rootElement,
    );
}
