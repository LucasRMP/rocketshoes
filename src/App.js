import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './config/reactotron';

import store from './store';

import Header from './components/Header';
import Routes from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <ToastContainer autoClose={2000} />
        <Header />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
