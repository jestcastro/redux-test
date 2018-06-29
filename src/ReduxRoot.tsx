import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';


import { counterReducer } from './store/reducers/counter';
import { resultReducer } from './store/reducers/result';

// import reduxPromise from 'redux-promise';

const reducers = combineReducers({
    ctr: counterReducer,
    res: resultReducer
})

const logger = (store: any) => {
    return (next: any) => {
        return (action: any) => {
            // console.log('[Middleware] Dispatching', action)
            // console.log('[Middleware] state', store.getState())
            const result = next(action);
            // console.log('[Middleware] next state', store.getState())
            return result;
        }
    }
}

// const store = createStore(reducers, );

export default ({ children }: { children: any }) => {
   
    const store = createStore(
        reducers,
        // @ts-ignore
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(logger)
    );

    return <Provider store={store}>{children}</Provider>;
};
