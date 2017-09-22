import React, { Component } from 'react'
import { Link } from 'react-router'
import { Segment, Header } from 'semantic-ui-react'


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
      <Segment key={key} circular
        style={{ width: 100, height: 100 }}
        as={Link} to={`/modules/${module.id}`}>
        {module.name}
      </Segment>
    )
  }
}


export default ModulesList
