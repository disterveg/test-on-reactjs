import { createStore, applyMiddleware, compose } from 'redux';
import createReducer from './reducers';
import thunk from 'redux-thunk';

export default function configureStore(initialState = {}) {
    let composeEnhancers = compose;

  if (window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
  }

  const store = createStore(
    createReducer(),
    initialState,
    composeEnhancers(applyMiddleware(thunk)),
  );

  return store;
}