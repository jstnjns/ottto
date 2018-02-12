import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Link } from 'react-router'
import Paper from 'material-ui/Paper'
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation'

import { syncModules } from '../modules/modules-actions'

import styles from './app.css'


class App extends Component {
  componentWillMount() {
    this.props.syncModules()
  }

  render() {
    let { children } = this.props

    return (
      <div>
        <Paper>
          <BottomNavigation showLabels value={2}
            style={{ position: 'fixed', left: 0, right: 0, bottom: 0 }}>
            <BottomNavigationAction
              component={Link} to="/users"
              label="Users">
            </BottomNavigationAction>

            <BottomNavigationAction
              component={Link} to="/rules"
              label="Rules">
            </BottomNavigationAction>

            <BottomNavigationAction
              component={Link} to="/"
              label="Rooms">
            </BottomNavigationAction>

            <BottomNavigationAction
              component={Link} to="/scenes"
              label="Scenes">
            </BottomNavigationAction>

            <BottomNavigationAction
              component={Link} to="/settings"
              label="Settings">
            </BottomNavigationAction>
          </BottomNavigation>
        </Paper>

        {children}
      </div>
    )
  }
}

export default connect(
  (state) => ({}),
  (dispatch) => bindActionCreators({ syncModules }, dispatch)
)(App)
