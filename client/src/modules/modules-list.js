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

  renderRoom(module, key) {
    return (
      <Link to={`/modules/${module.id}`} key={key}>
        {module.name}
      </Link>
    )
  }
}


export default ModulesList
