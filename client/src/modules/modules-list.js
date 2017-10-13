import React, { Component } from 'react'
import { Link } from 'react-router'
import { Card } from 'semantic-ui-react'


class ModulesList extends Component {
  render() {
    return (
      <Card.Group itemsPerRow={4}>
        {this.props.modules.map(this.renderRoom.bind(this))}
      </Card.Group>
    )
  }

  renderRoom(module, key) {
    return (
      <Card key={key}
        as={Link}
        to={`/modules/${module.id}`}>
        <Card.Content>
          <Card.Header>
            {module.name}
          </Card.Header>
        </Card.Content>
      </Card>
    )
  }
}


export default ModulesList
