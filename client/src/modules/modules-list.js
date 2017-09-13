import React, { Component } from 'react'
import { Link } from 'react-router'


class ModulesList extends Component {
  render() {
    return (
      <div className="modules-list">
        {this.props.modules.map(this.renderRoom.bind(this))}
      </div>
    )
  }

  renderRoom(room, key) {
    return (
      <div className="modules-list-item" key={key}>
        <div>{room.name}</div>
      </div>
    )
  }
}

export default ModulesList
