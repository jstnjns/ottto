import { combineReducers } from 'redux'

import roomsReducer from '../rooms/rooms-actions'
import modulesReducer from '../modules/modules-actions'

export default combineReducers({
  rooms: roomsReducer,
  modules: modulesReducer,
})
