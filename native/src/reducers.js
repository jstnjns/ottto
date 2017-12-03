import { combineReducers } from 'redux';


import roomsReducer from 'actions/rooms-actions';
import modulesReducer from 'actions/modules-actions';


export default combineReducers({
  rooms: roomsReducer,
  modules: modulesReducer,
});
