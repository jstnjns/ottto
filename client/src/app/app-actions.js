import { combineReducers } from 'redux'

import roomsReducer from '../rooms/rooms-actions'
import rulesReducer from '../rules/rules-actions'
import modulesReducer from '../modules/modules-actions'

export default combineReducers({
  rooms: roomsReducer,
  rules: rulesReducer,
  modules: modulesReducer,
})
