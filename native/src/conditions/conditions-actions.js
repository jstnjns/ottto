import _ from 'lodash'
import { normalize } from 'normalizr'

import socket from '../socket'
import { conditionSchema, conditionsSchema } from '../schemas'


// TYPES
const CONDITIONS_GET = 'CONDITIONS_GET'
const CONDITIONS_GET_SUCCESS = 'CONDITIONS_GET_SUCCESS'
const CONDITIONS_GET_ERROR = 'CONDITIONS_GET_ERROR'

const CONDITION_UPDATE = 'CONDITION_UPDATE'
const CONDITION_UPDATE_SUCCESS = 'CONDITION_UPDATE_SUCCESS'
const CONDITION_UPDATE_ERROR = 'CONDITION_UPDATE_ERROR'

const CONDITION_CREATE = 'CONDITION_CREATE'
const CONDITION_CREATE_SUCCESS = 'CONDITION_CREATE_SUCCESS'
const CONDITION_CREATE_ERROR = 'CONDITION_CREATE_ERROR'


// CREATORS
export const getConditions = () => {
  return (dispatch) => {
    dispatch(gettingConditions())

    return socket.get('/api/ruleconditions')
      .then((conditions) => dispatch(getConditionsSuccess(conditions)))
      // .catch((error) => dispatch(getConditionsError(error)))
  }
}

const gettingConditions = () => {
  return { type: CONDITIONS_GET }
}

const getConditionsSuccess = (response) => {
  return {
    type: CONDITIONS_GET_SUCCESS,
    ...normalize(response, conditionsSchema),
  }
}

const getConditionsError = (error) => {
  return { type: CONDITIONS_GET_ERROR, error }
}

export const saveCondition = (condition) => {
  const action = condition.id
    ? updateCondition
    : createCondition;

  return action(condition);
}

const updateCondition = (condition) => {
  return (dispatch) => {
    dispatch(updatingCondition(condition))

    return socket.put(`/api/ruleconditions/${condition.id}`, condition)
      .then((response) => dispatch(updateConditionSuccess(response)))
      // .catch((error) => dispatch(updateConditionError(error)))
  }
}

const updatingCondition = (params) => {
  return { type: CONDITION_UPDATE, params }
}

const updateConditionSuccess = (condition) => {
  return {
    type: CONDITION_UPDATE_SUCCESS,
    ...normalize(condition, conditionSchema),
  }
}

const updateConditionError = (error) => {
  return { type: CONDITION_UPDATE_ERROR, error }
}

const createCondition = (params) => {
  return (dispatch) => {
    dispatch(creatingCondition(params))

    return socket.post(`/api/ruleconditions/`, params)
      .then((response) => dispatch(createConditionSuccess(response)))
      // .catch((error) => dispatch(createConditionError(error)))
  }
}

const creatingCondition = (params) => {
  return { type: CONDITION_CREATE, params }
}

const createConditionSuccess = (condition) => {
  return {
    type: CONDITION_CREATE_SUCCESS,
    ...normalize(condition, conditionSchema),
  }
}

const createConditionError = (error) => {
  return { type: CONDITION_CREATE_ERROR, error }
}
