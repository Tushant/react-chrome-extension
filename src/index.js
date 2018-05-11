import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
import configureStore from 'Store';
import App from 'Pages/Containers/App';

const store = configureStore();
const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  MOUNT_NODE
);
registerServiceWorker();
