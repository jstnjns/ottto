import React from 'react'

import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'

import './app.css'


export default ({ children }) =>
  <div>
    <Paper>
      <BottomNavigation showLabels
        style={{ position: 'fixed', left: 0, right: 0, bottom: 0 }}>
        <BottomNavigationAction
          component={Link} to="/users"
          label="Users"
          values="users">
        </BottomNavigationAction>

        <BottomNavigationAction
          component={Link} to="/rules"
          label="Rules"
          value="rules">
        </BottomNavigationAction>

        <BottomNavigationAction
          component={Link} to="/"
          label="Rooms"
          value="rooms">
        </BottomNavigationAction>

        <BottomNavigationAction
          component={Link} to="/scenes"
          label="Scenes"
          value="">
        </BottomNavigationAction>

        <BottomNavigationAction
          component={Link} to="/settings"
          label="Settings">
        </BottomNavigationAction>
      </BottomNavigation>
    </Paper>

    {children}
  </div>
