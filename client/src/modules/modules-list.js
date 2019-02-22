import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import List, { ListItem, ListItemIcon, ListItemText } from '@material-ui/core/List';
import Avatar from '@material-ui/core/Avatar'
import BrightnessLow from '@material-ui/icons/BrightnessLow'


class ModulesList extends Component {
  render() {
    return (
      <List>
        {this.props.modules.map(this.renderRoom.bind(this))}
      </List>
    )
  }

  renderRoom(module, key) {
    return (
      <ListItem key={key} button
        component={Link} to={`/modules/${module.id}`}>
        <ListItemIcon>
          <Avatar>
            <BrightnessLow style={{ fill: '#FFFFFF', width: 24, height: 24 }} />
          </Avatar>
        </ListItemIcon>
        <ListItemText primary={module.name} secondary={JSON.stringify(module.values)} />
      </ListItem>
    )
  }
}


export default ModulesList
