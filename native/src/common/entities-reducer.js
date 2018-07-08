import {merge} from 'lodash'


const entitiesReducer = (state = {}, action) => (
  merge({}, state, action.entities)
)


export default entitiesReducer
