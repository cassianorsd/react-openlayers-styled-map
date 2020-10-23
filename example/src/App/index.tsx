import React from 'react';
import Providers from '../Providers';
import Routes from '../Routes';
import { AppStyle } from './style';

function App() {
  return (
    <Providers>
      <Routes />
      <AppStyle />
    </Providers>
  );
}

export default App;
