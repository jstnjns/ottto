import _ from 'lodash'
import { denormalize } from 'normalizr'

import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Actions } from 'react-native-router-flux';

import Room from 'rooms/room-component'
import { roomSchema } from '../schemas'


export default connect(
  // mapStateToProps
  (state, { room }) => ({
    room: denormalize(room, roomSchema, state.entities)
  }),
  // mapDispatchToProps
  (dispatch) => ({
    onModulePress: (module) => (
      Actions.showModule({ module })
    )
  })
)(Room)
