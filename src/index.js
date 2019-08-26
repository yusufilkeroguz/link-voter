import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import configureStore from './store';

import './index.css';

import App from './App';
import AddLink from './components/AddLink'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router>

      <Route path="/" exact component={App} />
      <Route path="/add-link" component={AddLink} />
    </Router>
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
