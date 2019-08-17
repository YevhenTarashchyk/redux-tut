import React from 'react';
import { Switch, Route } from 'react-router';

import Phones from '../components/phones/Phones';
import Phone from '../components/phone/Phone';
import Basket from '../components/basket/Basket';

export default (
  <Switch>
    <Route exact path="/" component={Phones} />
    <Route path="/categories/:id" component={Phones} />
    <Route path="/phones/:id" component={Phone} />
    <Route path="/basket" component={Basket} />
  </Switch>
);
