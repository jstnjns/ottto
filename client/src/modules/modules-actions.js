import socket from '../socket'


// Action Types
const MODULE_GET = 'MODULE_GET'
const MODULE_GET_SUCCESS = 'MODULE_GET_SUCCESS'
const MODULE_UPDATE = 'MODULE_UPDATE'
const MODULE_UPDATE_SUCCESS = 'MODULE_UPDATE_SUCCESS'


// Action Creators
export const getModule = (id) => {
  return (dispatch) => {
    dispatch(gettingModule())

    return socket.get(`/api/modules/${id}`)
      .then(module => dispatch(getModuleSuccess(module)))
  }
}
const gettingModule = () => {
  return { type: MODULE_GET }
}
const getModuleSuccess = (module) => {
  return { type: MODULE_GET_SUCCESS, module }
}

export const updateModule = (params) => {
  return (dispatch) => {
    dispatch(updatingModule())

    return socket.put(`/api/modules/${params.id}`, params)
      .then(module => dispatch(updateModuleSuccess(module)))
  }
}
const updatingModule = () => {
  return { type: MODULE_UPDATE }
}
const updateModuleSuccess = (module) => {
  return { type: MODULE_UPDATE_SUCCESS, module }
}


// Reducers
const initialState = {
  entities: [],
}

export default (state = initialState, action) => {
  switch(action.type) {
    case MODULE_GET_SUCCESS:
      return {
        ...state,
        entities: {
          ...state.entities,
          [action.module.id]: action.module,
        }
      }

    default: return state
  }
}
