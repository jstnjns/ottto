import _ from 'lodash'
import socket from '../socket'


// Action Types
const ROOMS_GET = 'ROOMS_GET'
const ROOMS_GET_SUCCESS = 'ROOMS_GET_SUCCESS'
const ROOMS_GET_ERROR = 'ROOMS_GET_ERROR'
const ROOM_GET = 'ROOM_GET'
const ROOM_GET_SUCCESS = 'ROOM_GET_SUCCESS'
const ROOM_GET_ERROR = 'ROOM_GET_ERROR'


// Action Creators
export const getRooms = () => {
  return (dispatch) => {
    dispatch(gettingRooms())

    return socket.get('/api/modulegroups')
      .then(rooms => dispatch(getRoomsSuccess(rooms)))
      .catch(error => dispatch(getRoomsError(error)))
  }
}
const gettingRooms = () => {
  return { type: ROOMS_GET }
}
const getRoomsSuccess = (rooms) => {
  return { type: ROOMS_GET_SUCCESS, rooms }
}
const getRoomsError = (error) => {
  return { type: ROOMS_GET_ERROR, error }
}
export const getRoom = (id) => {
  return (dispatch) => {
    dispatch(gettingRoom())

    return socket.get(`/api/modulegroups/${id}`)
      .then(room => dispatch(getRoomSuccess(room)))
      .catch(error => dispatch(getRoomError(error)))
  }
}
const gettingRoom = () => {
  return { type: ROOM_GET }
}
const getRoomSuccess = (room) => {
  console.log('success', room)
  return { type: ROOM_GET_SUCCESS, room }
}
const getRoomError = (error) => {
  return { type: ROOM_GET_ERROR, error }
}


// Reducers
const initialState = {
  entities: [],
}

export default (state = initialState, action) => {
  switch(action.type) {
    case ROOMS_GET:
      return {
        ...state,
      }

    case ROOMS_GET_SUCCESS:
      return {
        ...state,
        entities: {
          ...state.entities,
          ..._.keyBy(action.rooms, 'id'),
        }
      }

    case ROOMS_GET_ERROR:
      return {
        ...state,
      }

    case ROOM_GET_SUCCESS:
      return {
        ...state,
        entities: {
          ...state.entities,
          [action.room.id]: action.room,
        }
      }

    default: return state
  }
}
