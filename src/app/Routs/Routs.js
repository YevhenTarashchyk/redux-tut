import React from 'react';
import { Switch, Route } from 'react-router';

import Phones from '../components/phones/Phones';
import Phone from '../components/phone/Phone';

export default (
  <Switch>
    <Route exact path="/" component={Phones} />
    <Route path="/phones/:id" component={Phone} />
  </Switch>
);
