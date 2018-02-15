import _ from 'lodash'

import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Rooms from 'rooms/rooms-component'
import { getRooms } from 'rooms/rooms-actions'
import { getModules } from 'modules/modules-actions'


export default connect(
  (state) => ({ rooms: _.toArray(state.rooms.entities) }),
  (dispatch) => bindActionCreators({ getRooms, getModules }, dispatch)
)(Rooms)
