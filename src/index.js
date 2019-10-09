import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import reducers from './reducers';
import middleware from './middleware';

const store=createStore(reducers, middleware);

ReactDOM.render(
  <Provider store={store}>
  <App />
 </Provider>,
  document.getElementById('root')
);