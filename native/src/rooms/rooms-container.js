import _ from 'lodash'

import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getRooms } from 'actions/rooms-actions'
import { getModules } from 'actions/modules-actions'

import Rooms from './rooms-component'


export default connect(
  (state) => ({ rooms: _.toArray(state.rooms.entities) }),
  (dispatch) => bindActionCreators({ getRooms, getModules }, dispatch)
)(Rooms)
