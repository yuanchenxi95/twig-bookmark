import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { Router } from 'react-router';
import { createHashHistory } from 'history';
// import { syncHistoryWithStore } from 'mobx-react-router'
import 'antd/dist/antd.css';

import './i18n';

import { AppContainer } from './containers/App';

/**
 * init
 */
const hashHistory = createHashHistory();

// import stores from './stores'
// import App from './containers'

// const history = syncHistoryWithStore(hashHistory, stores.routingStore);
const rootElement = document.getElementById('app');

// if (rootElement) {
//     ReactDOM.render(
//         <Provider {...stores}>
//             <Provider {...stores}>
//                 <I18nextProvider i18n={i18n}>
//                     <Router history={history}>
//                         <App/>
//                     </Router>
//                 </I18nextProvider>
//             </Provider>,
//             rootElement
//             )
//             }
if (rootElement) {
    ReactDOM.render(
        <Provider>
            <AppContainer />
        </Provider>,
        rootElement,
    );
}
