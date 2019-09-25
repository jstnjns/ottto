// import _ from 'lodash'
// import socket from '../socket'
//
//
// // TYPES
// const RULES_GET = 'RULES_GET'
// const RULES_GET_SUCCESS = 'RULES_GET_SUCCESS'
// const RULES_GET_ERROR = 'RULES_GET_ERROR'
//
// const RULE_GET = 'RULE_GET'
// const RULE_GET_SUCCESS = 'RULE_GET_SUCCESS'
// const RULE_GET_ERROR = 'RULE_GET_ERROR'
//
// // const RULE_POST = 'RULE_POST'
// // const RULE_POST_SUCCESS = 'RULE_POST_SUCCESS'
// // const RULE_POST_ERROR = 'RULE_POST_ERROR'
//
// // const RULE_PUT = 'RULE_PUT'
// // const RULE_PUT_SUCCESS = 'RULE_PUT_SUCCESS'
// // const RULE_PUT_ERROR = 'RULE_PUT_ERROR'
//
// // const RULE_DELETE = 'RULE_DELETE'
// // const RULE_DELETE_SUCCESS = 'RULE_DELETE_SUCCESS'
// // const RULE_DELETE_ERROR = 'RULE_DELETE_ERROR'
//
//
// // CREATORS
// export const getRules = () => {
//   return (dispatch) => {
//     dispatch(gettingRules())
//
//     return socket.get('/api/rules')
//       .then(rules => dispatch(getRulesSuccess(rules)))
//       .catch(error => dispatch(getRulesError(error)))
//   }
// }
// const gettingRules = () => {
//   return { type: RULES_GET }
// }
// const getRulesSuccess = (rules) => {
//   return { type: RULES_GET_SUCCESS, rules }
// }
// const getRulesError = (error) => {
//   return { type: RULES_GET_ERROR, error }
// }
//
// export const getRule = (id) => {
//   return (dispatch) => {
//     dispatch(gettingRule())
//
//     return socket.get(`/api/rules/${id}`)
//       .then(rule => dispatch(getRuleSuccess(rule)))
//       .catch(error => dispatch(getRuleError(error)))
//   }
// }
// const gettingRule = () => {
//   return { type: RULE_GET }
// }
// const getRuleSuccess = (rule) => {
//   return { type: RULE_GET_SUCCESS, rule }
// }
// const getRuleError = (error) => {
//   return { type: RULE_GET_ERROR, error }
// }
//
// // REDUCERS
// const initialState = {
//   entities: [],
// }
//
// const rulesReducer = (state = initialState, action) => {
//   switch(action.type) {
//     case RULES_GET:
//       return {
//         ...state,
//       }
//
//     case RULES_GET_SUCCESS:
//       return {
//         ...state,
//         entities: {
//           ...state.entities,
//           ..._.keyBy(action.rules, 'id'),
//         }
//       }
//
//     case RULES_GET_ERROR:
//       return {
//         ...state,
//       }
//
//     case RULE_GET_SUCCESS:
//       return {
//         ...state,
//         entities: {
//           ...state.entities,
//           [action.rule.id]: action.rule,
//         }
//       }
//
//     default: return state
//   }
// }
//
// export default rulesReducer
