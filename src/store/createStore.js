import {applyMiddleware, compose, createStore as createReduxStore} from 'redux';
import makeRootReducer from './reducers';
import rootSaga from 'sagas/rootSaga';

import createSagaMiddleware from 'redux-saga';

import allReducers from 'reducers/reducerRegistry';

const createStore = (initialState = {}) => {
    const sagaMiddleware = createSagaMiddleware();

    const middleware = [sagaMiddleware];

    const enhancers = [];
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createReduxStore(
        makeRootReducer(allReducers),
        initialState,
        composeEnhancers(applyMiddleware(...middleware), ...enhancers)
    );

    store.asyncReducers = allReducers;

    sagaMiddleware.run(rootSaga);

    return store;
};

export default createStore;
