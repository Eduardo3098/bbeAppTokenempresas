import {applyMiddleware, compose, createStore} from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(reduxThunk));

const store = createStore(reducers, enhancer);

export default store;
