import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import configureStore from './store';

import { Global, css } from '@emotion/core'

import { BrowserRouter as Router, Route } from "react-router-dom";

import List from './pages/List';
import AddLink from './pages/AddLink'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <>
    <Global
      styles={css`
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
            "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
            sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}
    />
    <Provider store={configureStore()}>
      <Router>
        <Route path="/" exact component={List} />
        <Route path="/add-link" component={AddLink} />
      </Router>
    </Provider>
  </>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
