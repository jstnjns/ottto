import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import rooms from 'rooms/rooms-actions';
import modules from 'modules/modules-actions';
import rules from 'rules/rules-actions';


export default combineReducers({
  form,
  rooms,
  modules,
  rules,
});
