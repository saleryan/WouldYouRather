import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducers from './reducers';
import { middleware, sagaMiddleware } from './middleware';
import * as sagas from './sagas'

const store = createStore(reducers, middleware);

Object.values(sagas).forEach(sagaMiddleware.run.bind(sagaMiddleware))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);