import _ from 'lodash'
import socket from '../socket'


// TYPES
const ROOMS_GET = 'ROOMS_GET'
const ROOMS_GET_SUCCESS = 'ROOMS_GET_SUCCESS'
const ROOMS_GET_ERROR = 'ROOMS_GET_ERROR'

const ROOM_GET = 'ROOM_GET'
const ROOM_GET_SUCCESS = 'ROOM_GET_SUCCESS'
const ROOM_GET_ERROR = 'ROOM_GET_ERROR'

const ROOM_POST = 'ROOM_POST'
const ROOM_POST_SUCCESS = 'ROOM_POST_SUCCESS'
const ROOM_POST_ERROR = 'ROOM_POST_ERROR'

const ROOM_PUT = 'ROOM_PUT'
const ROOM_PUT_SUCCESS = 'ROOM_PUT_SUCCESS'
const ROOM_PUT_ERROR = 'ROOM_PUT_ERROR'

const ROOM_DELETE = 'ROOM_DELETE'
const ROOM_DELETE_SUCCESS = 'ROOM_DELETE_SUCCESS'
const ROOM_DELETE_ERROR = 'ROOM_DELETE_ERROR'


// CREATORS
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
  return { type: ROOM_GET_SUCCESS, room }
}
const getRoomError = (error) => {
  return { type: ROOM_GET_ERROR, error }
}

export const postRoom = (room) => {
  return (dispatch, getState) => {
    dispatch(postingRoom(room))

    return socket.post('/api/modulegroups', room)
      .then(room => dispatch(postRoomSuccess(room)))
      .catch(error => dispatch(postRoomError(error)))
  }
}
const postingRoom = (room) => {
  return { type: ROOM_POST, room }
}
const postRoomSuccess = (room) => {
  return { type: ROOM_POST_SUCCESS, room }
}
const postRoomError = (error) => {
  return { type: ROOM_POST_ERROR, error }
}

export const putRoom = (room) => {
  return (dispatch, getState) => {
    dispatch(puttingRoom(room))

    return socket.put('/api/modulegroups/' + room.id, room)
      .then(room => dispatch(putRoomSuccess(room)))
      .catch(error => dispatch(putRoomError(room)))
  }
}
const puttingRoom = (room) => {
  return { type: ROOM_PUT, room }
}
const putRoomSuccess = (room) => {
  return { type: ROOM_PUT_SUCCESS, room }
}
const putRoomError = (error) => {
  return { type: ROOM_PUT_ERROR, error }
}

export const deleteRoom = (room) => {
  return (dispatch, getState) => {
    dispatch(deletingRoom(room))

    return socket.delete('/api/modulegroups/' + room.id)
      .then(room => dispatch(deleteRoomSuccess(room)))
      .catch(error => dispatch(deleteRoomError(room)))
  }
}
const deletingRoom = (room) => {
  return { type: ROOM_DELETE, room }
}
const deleteRoomSuccess = (room) => {
  return { type: ROOM_DELETE_SUCCESS, room }
}
const deleteRoomError = (error) => {
  return { type: ROOM_DELETE_ERROR, error }
}


// REDUCERS
const initialState = {
  entities: [],
}

const roomsReducer = (state = initialState, action) => {
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

export default roomsReducer
