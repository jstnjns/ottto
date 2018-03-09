import _ from 'lodash'
import socket from '../socket'


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

    return socket.get('/api/conditions')
      .then((conditions) => dispatch(getConditionsSuccess(conditions)))
      .catch((error) => dispatch(getConditionsError(error)))
  }
}

const gettingConditions = () => {
  return { type: CONDITIONS_GET }
}

const getConditionsSuccess = (conditions) => {
  return { type: CONDITIONS_GET_SUCCESS, conditions }
}

const getConditionsError = (error) => {
  return { type: CONDITIONS_GET_ERROR, error }
}

export const updateCondition = (params) => {
  return (dispatch) => {
    dispatch(updatingCondition())

    return socket.put(`/api/conditions/${condition.rule}`, params)
      .then((condition) => dispatch(updateConditionSuccess(condition)))
      .catch((error) => dispatch(updateConditionError(error)))
  }
}

const updatingCondition = () => {
  return { type: CONDITION_UPDATE }
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
    case CONDITIONS_GET:
      return {
        ...state,
        entities: {
          ...state.entities,
          ..._.keyBy(action.conditions, 'id'),
        },
      }

    default: return state
  }
}

export default conditionsReducer
