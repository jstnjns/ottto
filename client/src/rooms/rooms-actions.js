import _ from 'lodash'


// Action Types
const ROOMS_GET = 'ROOMS_GET'
const ROOMS_GET_SUCCESS = 'ROOMS_GET_SUCCESS'
const ROOMS_GET_ERROR = 'ROOMS_GET_ERROR'


// Action Creators
export const getRooms = () => {
  return (dispatch, getState) => {
    dispatch(gettingRooms())

    // return socket.get('/api/modulegroups')
    //   .then(rooms => dispatch(getRoomsSuccess(rooms)))
    //   .catch(error => dispatch(getRoomsError(error)))
  }
}
export const gettingRooms = () => {
  return { type: ROOMS_GET }
}
export const getRoomsSuccess = (rooms) => {
  return { type: ROOMS_GET_SUCCESS, rooms }
}
export const getRoomsError = (error) => {
  return { type: ROOMS_GET_ERROR, error }
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

    default: return state
  }
}
