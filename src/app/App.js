import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware, ConnectedRouter } from 'connected-react-router';

import Routs from './Routs/Routs';
import reducers from '../reducers/rootReducer';

const history = createBrowserHistory();
const middlewares = [thunk, routerMiddleware(history)];
const store = createStore(
  reducers(history),
  composeWithDevTools(applyMiddleware(...middlewares))
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>{Routs}</ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
