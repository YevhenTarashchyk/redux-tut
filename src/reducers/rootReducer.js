import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import phonesPage from './phonespage';

import phones from './phones-reducer';

export default history =>
  combineReducers({
    router: connectRouter(history),
    phones,
    phonesPage
  });
