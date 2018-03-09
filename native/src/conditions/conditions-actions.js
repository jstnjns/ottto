import _ from 'lodash'
import { normalize } from 'normalizr'

import socket from '../socket'
import { conditions } from '../schemas'


// TYPES
const CONDITIONS_GET = 'CONDITIONS_GET'
const CONDITIONS_GET_SUCCESS = 'CONDITIONS_GET_SUCCESS'
const CONDITIONS_GET_ERROR = 'CONDITIONS_GET_ERROR'

const CONDITION_UPDATE = 'CONDITION_UPDATE'
const CONDITION_UPDATE_SUCCESS = 'CONDITION_UPDATE_SUCCESS'
const CONDITION_UPDATE_ERROR = 'CONDITION_UPDATE_ERROR'


// CREATORS
export const getConditions = () => {
  return (dispatch) => {
    dispatch(gettingConditions())

    return socket.get('/api/ruleconditions')
      .then((conditions) => dispatch(getConditionsSuccess(conditions)))
      .catch((error) => dispatch(getConditionsError(error)))
  }
}

const gettingConditions = () => {
  return { type: CONDITIONS_GET }
}

const getConditionsSuccess = (response) => {
  return {
    type: CONDITIONS_GET_SUCCESS,
    ...normalize(response, conditions),
  }
}

const getConditionsError = (error) => {
  return { type: CONDITIONS_GET_ERROR, error }
}

export const updateCondition = (condition) => {
  return (dispatch) => {
    dispatch(updatingCondition(condition))

    return socket.put(`/api/conditions/${condition.id}`, condition)
      .then(() => dispatch(updateConditionSuccess(condition)))
      .catch((error) => dispatch(updateConditionError(error)))
  }
}

const updatingCondition = (params) => {
  return { type: CONDITION_UPDATE, params }
}

const updateConditionSuccess = (condition) => {
  return { type: CONDITION_UPDATE_SUCCESS, condition }
}

const updateConditionError = (error) => {
  return { type: CONDITION_UPDATE_ERROR, error }
}


// REDUCERS
const initialState = {
  entities: [],
}

const conditionsReducer = (state = initialState, action) => {
  switch(action.type) {
    case CONDITIONS_GET_SUCCESS:
      return {
        ...state,
        entities: {
          ...state.entities,
          ...action.entities.conditions,
        },
      }

    case CONDITION_UPDATE_SUCCESS:
      return {
        ...state,
        entities: {
          ...state.entities,
          [action.condition.id]: action.condition
        }
      }

    default: return state
  }
}

export default conditionsReducer
