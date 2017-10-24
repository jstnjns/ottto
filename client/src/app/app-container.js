import React from 'react'
import { Link } from 'react-router'
import { Icon } from 'semantic-ui-react'
import Paper from 'material-ui/Paper'
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation'
import Tabs, { Tab } from 'material-ui/Tabs';

import styles from './app.css'


export default function App({ children }) {
  return (
    <div>
      <Paper>
        <BottomNavigation showLabels value={2}
          style={{ position: 'fixed', left: 0, right: 0, bottom: 0 }}>
          <BottomNavigationButton
            component={Link} to="/users"
            label="Users">
          </BottomNavigationButton>

          <BottomNavigationButton
            component={Link} to="/rules"
            label="Rules">
          </BottomNavigationButton>

          <BottomNavigationButton
            component={Link} to="/"
            label="Rooms">
          </BottomNavigationButton>

          <BottomNavigationButton
            component={Link} to="/scenes"
            label="Scenes">
          </BottomNavigationButton>

          <BottomNavigationButton
            component={Link} to="/settings"
            label="Settings">
          </BottomNavigationButton>
        </BottomNavigation>
      </Paper>

      {children}
    </div>
  )
}
