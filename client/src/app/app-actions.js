import { combineReducers } from 'redux'

import roomsReducer from '../rooms/rooms-actions'

export default combineReducers({
  rooms: roomsReducer,
})
