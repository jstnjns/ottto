import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getRoom } from './rooms-actions'
import ModulesList from '../modules/modules-list'

class Rooms extends Component {
  componentWillMount() {
    this.props.getRoom(this.props.params.id)
  }

  render() {
    let room = this.props.room

    if(room) {
      return (
        <div className="rooms">
          <h1>{room.name}</h1>

          <ModulesList modules={room.modules} />
        </div>
      )
    } else {
      return (
        <div className="rooms">
          <h1>Loading...</h1>
        </div>
      )
    }
  }
}


export default connect(
  (state, props) => ({ room: state.rooms.entities[props.params.id] }),
  (dispatch) => bindActionCreators({ getRoom }, dispatch)
)(Rooms)
