import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { CustomProvider } from 'rsuite';
import Router from './router/Router';
import { store } from './utils/store';
import 'rsuite/dist/rsuite.min.css';
import './App.css';

const App = () => {
    return (
        <Provider store={store}>
            <CustomProvider theme="ligth">
                <BrowserRouter>
                    <Router />
                </BrowserRouter>
            </CustomProvider>
        </Provider>
    );
};

export default App;
