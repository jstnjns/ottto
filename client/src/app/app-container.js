import React from 'react'
import { Link } from 'react-router'
import { Container, Menu } from 'semantic-ui-react'

export default function App({ children }) {
  return (
    <Container>
      <Menu pointing secondary>
        <Menu.Item name="rooms" as={Link} to="/" />
        <Menu.Item name="settings" as={Link} to="/settings" />
      </Menu>

      {children}
    </Container>
  )
}
