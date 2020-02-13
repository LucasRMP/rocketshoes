import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './config/reactotron';

import store from './store';
import history from './services/history';

import Header from './components/Header';
import Routes from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <GlobalStyle />
        <ToastContainer autoClose={2000} />
        <Header />
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
