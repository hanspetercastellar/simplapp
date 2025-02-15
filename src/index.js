import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import  store from './redux/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
//import 'rsuite/dist/styles/rsuite-default.css';
const Application = () =>  (
    <Provider store={store}>
        <App />
    </Provider>
)
ReactDOM.render(<Application />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
