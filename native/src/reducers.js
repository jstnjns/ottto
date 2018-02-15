import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import rooms from 'actions/rooms-actions';
import modules from 'actions/modules-actions';


export default combineReducers({
  form,
  rooms,
  modules,
});
