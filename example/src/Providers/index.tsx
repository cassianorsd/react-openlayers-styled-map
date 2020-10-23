import React from 'react';
import { HashRouter } from 'react-router-dom';

const Providers: React.FC = ({ children }) => {
  return <HashRouter>{children}</HashRouter>;
};

export default Providers;
