import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import phonesPage from './phonespage';
import phones from './phones-reducer';
import singlePhonePage from './singlePhonePage';
import basket from './basket-reducer';

export default history =>
  combineReducers({
    router: connectRouter(history),
    phones,
    phonesPage,
    singlePhonePage,
    basket
  });
