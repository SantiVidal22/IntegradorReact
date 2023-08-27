import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyles } from './styles/GlobalStyles';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/es/integration/react'
import {store, persistor} from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
              <GlobalStyles/>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </PersistGate>
        </Provider>
    </>
);

