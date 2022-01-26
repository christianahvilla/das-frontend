import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { CustomProvider } from 'rsuite';
import { esES } from 'rsuite/esm/locales';
import { AppProvider } from './utils/AppContext';
import Router from './router/Router';
import { store } from './utils/store';
import 'rsuite/dist/rsuite.min.css';
import './App.css';

const App = () => {
    return (
        <Provider store={store}>
            <CustomProvider theme="ligth" locale={esES}>
                <AppProvider>
                    <BrowserRouter>
                        <Router />
                    </BrowserRouter>
                </AppProvider>
            </CustomProvider>
        </Provider>
    );
};

export default App;
