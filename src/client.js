import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import MainPage from "./pages/MainPage";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";


import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(
  promise
)(createStore);

const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={hashHistory}>
      <Route path="/" component={MainPage}>
        <IndexRoute component={FirstPage}></IndexRoute>
        <Route path="secondpage" name="secondpage" component={SecondPage}></Route>
      </Route>
    </Router>
  </Provider>,
app);
