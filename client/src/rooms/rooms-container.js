import _ from 'lodash'
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getRooms } from './rooms-actions'
import RoomsList from './rooms-list'


class Rooms extends Component {
  componentWillMount() {
    this.props.getRooms()
  }

  render() {
    return (
      <div className="rooms">
        <h1>Rooms</h1>

        <RoomsList rooms={this.props.rooms} />
      </div>
    )
  }
}


export default connect(
  (state) => ({ rooms: _.toArray(state.rooms.entities) }),
  (dispatch) => bindActionCreators({ getRooms }, dispatch)
)(Rooms)
