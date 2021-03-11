import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { SamplePage } from './pages';

export const Router: React.FC = () => (
  <Switch>
    <Route path="/sample" exact>
      <SamplePage />
    </Route>
  </Switch>
);
