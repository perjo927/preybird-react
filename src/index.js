import App from './containers/App';
import { createStore, applyMiddleware } from 'redux'
import './index.css';
import { Provider } from 'react-redux'
import reducer from './reducers'
import React from 'react';
import { render } from 'react-dom'
import thunk from 'redux-thunk'

const middleware = [ thunk ]

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
