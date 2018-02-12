import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getRoom } from './rooms-actions'
import Room from './room-component'


class RoomContainer extends Component {
  componentWillMount() {
    this.props.getRoom(this.props.params.id)
  }

  render() {
    return (
      <Room room={this.props.room} />
    )
  }
}


export default connect(
  (state, props) => ({ room: state.rooms.entities[props.params.id] }),
  (dispatch) => bindActionCreators({ getRoom }, dispatch)
)(RoomContainer)
