import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { CustomProvider } from 'rsuite';
import Router from './utils/router';
import { store } from './utils/store';

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
