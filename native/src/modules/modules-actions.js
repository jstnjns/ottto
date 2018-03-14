import _ from 'lodash'
import { normalize } from 'normalizr'

import socket from '../socket'
import { moduleSchema, modulesSchema } from '../schemas'

// TYPES
const MODULES_GET = 'MODULES_GET'
const MODULES_GET_SUCCESS = 'MODULES_GET_SUCCESS'
const MODULES_GET_ERROR = 'MODULES_GET_ERROR'

const MODULE_GET = 'MODULE_GET'
const MODULE_GET_SUCCESS = 'MODULE_GET_SUCCESS'
const MODULE_GET_ERROR = 'MODULE_GET_ERROR'

const MODULE_UPDATE = 'MODULE_UPDATE'
const MODULE_UPDATE_SUCCESS = 'MODULE_UPDATE_SUCCESS'
const MODULE_UPDATE_ERROR = 'MODULE_UPDATE_ERROR'


// CREATORS
export const getModules = () => {
  return (dispatch, getState) => {
    socket.on('modules', (msg) => {
      switch(msg.verb) {
        case 'updated': dispatch(updateModuleSuccess(msg.data))
      }
    })

    return socket.get('/api/modules/')
      .then((modules) => dispatch(getModulesSuccess(modules)))
      .catch((error) => dispatch(getModuleError(error)))
  }
}
export const getModulesSuccess = (response) => {
  return {
    type: MODULES_GET_SUCCESS,
    ...normalize(response, modulesSchema),
  }
}
export const getModulesError = (error) => {
  return { type: MODULES_GET_ERROR, error }
}


export const getModule = (id) => {
  return (dispatch, getState) => {
    return socket.get('/api/modules/' + id)
      .then((module) => dispatch(getModuleSuccess(module)))
      .catch((error) => dispatch(getModuleError(error)))
  }
}
export const getModuleSuccess = (module) => {
  return { type: MODULE_GET_SUCCESS, module }
}
export const getModuleError = (error) => {
  return { type: MODULE_GET_ERROR, error }
}

export const updateModule = (module) => {
  return (dispatch, getState) => {
    dispatch(updatingModule(module))

    socket.put('/api/modules/' + module.id, module)
      .then((module) => dispatch(updateModuleSuccess(module)))
      .catch((error) => dispatch(updateModuleError(error)))
  }
}
const updatingModule = (module) => {
  return {
    type: MODULE_UPDATE,
    ...normalize(module, moduleSchema),
  }
}
const updateModuleSuccess = (module) => {
  return {
    type: MODULE_UPDATE_SUCCESS,
    ...normalize(module, moduleSchema),
  }
}
const updateModuleError = (error) => {
  return { type: MODULE_UPDATE_ERROR, error }
}


// // REDUCERS
// const initialState = {
//   entities: {},
// }
//
// const modulesReducer = (state = initialState, action) => {
//   switch(action.type) {
//     default: return state;
//   }
// }
//
//
// export default modulesReducer;
