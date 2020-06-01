import createReducer from './reducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

export default function configureStore() {
    let composeEnhancers = compose;

    if (window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
        composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
    }

    const store = createStore(
        createReducer(),
        composeEnhancers(applyMiddleware(thunk)),
    );
    
    return store;
}