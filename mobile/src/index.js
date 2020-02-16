import React from 'react';
import { StatusBar } from 'react-native';

import 'react-native-gesture-handler';

import Routes from './routes';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#191920" barStyle="light-content" />
      <Routes />
    </>
  );
};

export default App;
