import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducer';

const persistConfig = {
    key: 'airport',
    storage,
};

const pReducer = persistReducer(persistConfig, rootReducer);

const store = process.env.REACT_APP_NODE_ENV === 'development'
    ? createStore(pReducer, compose(applyMiddleware(thunkMiddleware), devToolsEnhancer()))
    : createStore(pReducer, applyMiddleware(thunkMiddleware));

const persistor = persistStore(store);

export { store, persistor };
