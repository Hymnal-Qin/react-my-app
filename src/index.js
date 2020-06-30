import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { store } from '@store/store';
import { initUser } from '@store/user/actions';
import * as serviceWorker from './serviceWorker';

// css
import GlobalStyle from './css/Global.style';

import App from './App';
import ScrollToTop from './layout/ScrollToTop';

// User Authentication
initUser();

// App
const Index = () => (
  <Provider store={store} key="provider">
    {/* Global style */}
    {/*<GlobalStyle />*/}
    {/* 创建一个history BrowserRouter */}
    <Router>
      <ScrollToTop/>
      <App/>
    </Router>
  </Provider>
);

ReactDOM.render(<Index/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
//serviceWorker.unregister();
