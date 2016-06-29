import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router, Route, browserHistory} from 'react-router';

import App from './components/app';
import Resources from './components/Resources';
import reducers from './reducers';
import RequireAuth from './components/RequireAuth';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers);

const checkLogin = (nextState, replace, next) => {
    if(store.getState().loggedIn === false) {
        replace('/');
    }
    next();
};

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="resources" component={RequireAuth(Resources)}/>
        </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
