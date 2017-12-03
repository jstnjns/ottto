import _ from 'lodash'
import socket from '../socket'

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
export const syncModules = () => {
  return (dispatch, getState) => {
    socket.on('modules', (msg) => {
      switch(msg.verb) {
        case 'updated': dispatch(updateModuleSuccess(msg.data))
      }
    })
  }
}

export const getModules = () => {
  return (dispatch, getState) => {
    return socket.get('/api/modules/')
      .then( modules => dispatch(getModulesSuccess(modules)) )
      .then( error => dispatch(getModuleError(error)) )
  }
}
export const getModulesSuccess = (modules) => {
  return { type: MODULES_GET_SUCCESS, modules }
}
export const getModulesError = (error) => {
  return { type: MODULES_GET_ERROR, error }
}


export const getModule = (id) => {
  return (dispatch, getState) => {
    return socket.get('/api/modules/' + id)
      .then( module => dispatch(getModuleSuccess(module)) )
      .catch( error => dispatch(getModuleError(error)) )
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
      .then(module => dispatch(updateModuleSuccess(module)))
      .catch(error => dispatch(updateModuleError(error)))
  }
}
const updatingModule = (module) => {
  return { type: MODULE_UPDATE, module }
}
const updateModuleSuccess = (module) => {
  return { type: MODULE_UPDATE_SUCCESS, module }
}
const updateModuleError = (error) => {
  return { type: MODULE_UPDATE_ERROR, error }
}


// REDUCERS
const initialState = {
  entities: {},
  active: null
}

const modulesReducer = (state = initialState, action) => {
  switch(action.type) {
    case MODULES_GET_SUCCESS:
      return {
        ...state,
        entities: {
          ...state.entities,
          ..._.keyBy(action.modules, 'id'),
        }
      }

    case MODULE_GET_SUCCESS:
      return {
        ...state,
        entities: {
          ...state.entities,
          [action.module.id]: action.module
        }
      }

    case MODULE_GET_ERROR:
      return {
        ...state,
      }

    case MODULE_UPDATE:
    case MODULE_UPDATE_SUCCESS:
      return {
        ...state,
        entities: {
          ...state.entities,
          [action.module.id]: {
            ...state.entities[action.module.id],
            ...action.module
          }
        }
      }

    case MODULE_UPDATE_ERROR:
      return {
        ...state,
      }

    default: return state;
  }
}


export default modulesReducer;
