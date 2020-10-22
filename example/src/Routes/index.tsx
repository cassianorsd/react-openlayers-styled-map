import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BlankPage from '../pages/BlankPage';
import HomePage from '../pages/HomePage';
import MapDebug from '../pages/MapDebug';
import MultiMapsPage from '../pages/MultiMapsPage';


const Routes: React.FC = () => {
  return (
    <Switch >
      <Route path="/blank" component={BlankPage}/>
      <Route path="/map-debug" component={MapDebug}/>
      <Route path="/multi" component={MultiMapsPage}/>
      <Route path="/" component={HomePage}/>
    </Switch>
  );
};

export default Routes;