import React from 'react'
import { Link } from 'react-router'
import { Container, Menu, Icon } from 'semantic-ui-react'

export default function App({ children }) {
  return (
    <Container>
      <Menu secondary pointing>
        <Menu.Item as={Link}
          name="rooms"
          to="/">
          <Icon name="grid layout" />
          Rooms
        </Menu.Item>

        <Menu.Item as={Link}
          name="scenes"
          to="/scenes">
          <Icon name="tasks" />
          Scenes
        </Menu.Item>

        <Menu.Item as={Link}
          name="rules"
          to="/rules">
          <Icon name="puzzle" />
          Rules
        </Menu.Item>

        <Menu.Item as={Link}
          name="settings"
          to="/settings"
          position="right">
          <Icon name="setting" />
          Settings
        </Menu.Item>
      </Menu>

      {children}
    </Container>
  )
}
