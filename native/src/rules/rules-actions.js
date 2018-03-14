import _ from 'lodash'
import { normalize } from 'normalizr'

import socket from '../socket'
import { rulesSchema } from '../schemas'


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
const getRulesSuccess = (response) => {
  return {
    type: RULES_GET_SUCCESS,
    ...normalize(response, rulesSchema),
  }
}
const getRulesError = (error) => {
  return { type: RULES_GET_ERROR, error }
}


// // REDUCERS
// const initialState = {
//   entities: {},
// }
//
// const rulesReducer = (state = initialState, action) => {
//   switch(action.type) {
//     default: return state
//   }
// }
//
// export default rulesReducer
