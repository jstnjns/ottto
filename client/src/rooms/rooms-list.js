import React, { Component } from 'react'
import { Link } from 'react-router'


class RoomsList extends Component {
  render() {
    return (
      <div className="rooms-list">
        {this.props.rooms.map(this.renderRoom.bind(this))}
      </div>
    )
  }

  renderRoom(room, key) {
    return (
      <Link to={`/rooms/${room.id}`} key={key}>
        {room.name}
      </Link>
    )
  }
}


export default RoomsList
