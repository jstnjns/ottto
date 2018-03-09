import _ from 'lodash'
import socket from '../socket'


// TYPES
const RULES_GET = 'RULES_GET'
const RULES_GET_SUCCESS = 'RULES_GET_SUCCESS'
const RULES_GET_ERROR = 'RULES_GET_ERROR'


// CREATORS
export const getRules = () => {
  return (dispatch) => {
    dispatch(gettingRules())

    return socket.get('/api/rules')
      .then(rules => dispatch(getRulesSuccess(rules)))
      .catch(error => dispatch(getRulesError(error)))
  }
}
const gettingRules = () => {
  return { type: RULES_GET }
}
const getRulesSuccess = (rules) => {
  return { type: RULES_GET_SUCCESS, rules }
}
const getRulesError = (error) => {
  return { type: RULES_GET_ERROR, error }
}


// REDUCERS
const initialState = {
  entities: [],
}

const rulesReducer = (state = initialState, action) => {
  switch(action.type) {
    case RULES_GET_SUCCESS:
      return {
        ...state,
        entities: {
          ...state.entities,
          ..._.keyBy(action.rules, 'id'),
        },
      }

    default: return state
  }
}

export default rulesReducer
