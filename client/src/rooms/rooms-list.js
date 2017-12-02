import React, { Component } from 'react'
import { Link } from 'react-router'
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';


class RoomsList extends Component {
  render() {
    return (
      <List>
        {this.props.rooms.map(this.renderRoom.bind(this))}
      </List>
    )
  }

  renderRoom(room, key) {
    return (
      <ListItem key={key} button
        component={Link} to={`/rooms/${room.id}`}>
        <ListItemText primary={room.name} />
      </ListItem>
    )
  }
}


export default RoomsList
