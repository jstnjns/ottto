import React, { Component } from 'react'
import { Link } from 'react-router'
import { Card } from 'semantic-ui-react'


class RoomsList extends Component {
  render() {
    return (
      <Card.Group itemsPerRow={4}>
        {this.props.rooms.map(this.renderRoom.bind(this))}
      </Card.Group>
    )
  }

  renderRoom(room, key) {
    return (
      <Card key={key}
        as={Link}
        to={`/rooms/${room.id}`}>
        <Card.Content>
          <Card.Header>
            {room.name}
          </Card.Header>
        </Card.Content>
      </Card>
    )
  }
}


export default RoomsList
