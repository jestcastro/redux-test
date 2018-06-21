import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
// import { createStore, combineReducers } from 'redux'

// import { Provider } from 'react-redux';
// import { counterReducer } from './store/reducers/counter';
// import { resultReducer } from './store/reducers/result';

import ReduxRoot from './ReduxRoot';


// const reducers = {
//   ctr: counterReducer,
//   res: resultReducer
// }
// const store = createStore(combineReducers(reducers));


ReactDOM.render(
  <ReduxRoot><App /></ReduxRoot>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
