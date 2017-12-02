import React, { Component } from 'react'
import { Link } from 'react-router'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar'
import LightbulbOutline from 'material-ui-icons/LightbulbOutline'


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
            <LightbulbOutline style={{ fill: '#FFFFFF', width: 24, height: 24 }} />
          </Avatar>
        </ListItemIcon>
        <ListItemText primary={module.name} secondary={JSON.stringify(module.values)} />
      </ListItem>
    )
  }
}


export default ModulesList
