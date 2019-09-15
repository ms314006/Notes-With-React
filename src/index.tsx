import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import store from './store';
import Main from './component/Main';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Main />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
