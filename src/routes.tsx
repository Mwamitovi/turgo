import * as React from 'react';
import { Route } from 'react-router-dom';
import Segments from './modules/segments/Segments';

const routes = [
  <Route exact path="/segments" render={() => <Segments />} />
];

export default routes;
