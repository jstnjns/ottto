import _ from 'lodash'

import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Rooms from './rooms-component'
import { getRooms } from './rooms-actions'
import { getModules } from '../modules/modules-actions'


export default connect(
  (state) => ({
    rooms: state.entities.rooms,
  }),
  (dispatch) => bindActionCreators({ getRooms, getModules }, dispatch)
)(Rooms)
