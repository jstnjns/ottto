import _ from 'lodash'

const ROOMS_GET_SUCCESS = 'ROOMS_GET_SUCCESS'
const MODULES_GET_SUCCESS = 'MODULES_GET_SUCCESS'
const MODULE_UPDATE_SUCCESS = 'MODULE_UPDATE_SUCCESS'
const RULES_GET_SUCCESS = 'RULES_GET_SUCCESS'
const CONDITIONS_GET_SUCCESS = 'CONDITIONS_GET_SUCCESS'
const CONDITION_UPDATE_SUCCESS = 'CONDITION_UPDATE_SUCCESS'


const initialState = {
  rooms: {},
  modules: {},
  types: {},
  rules: {},
  conditions: {},
}

const entitiesReducer = (state = initialState, action) => {
  switch(action.type) {
    case ROOMS_GET_SUCCESS:
    case MODULES_GET_SUCCESS:
    case MODULE_UPDATE_SUCCESS:
    case RULES_GET_SUCCESS:
    case CONDITIONS_GET_SUCCESS:
    case CONDITION_UPDATE_SUCCESS:
      return _.merge({}, state, action.entities)

    default: return state
  }
}

export default entitiesReducer
