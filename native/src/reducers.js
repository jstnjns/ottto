import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import entities from 'common/entities-reducer';


export default combineReducers({
  form,
  entities,
});
