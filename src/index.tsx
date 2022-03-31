import React from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {store, persistor} from "./redux";

console.log('LOG', persistor);

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
  document.getElementById('root')
);
