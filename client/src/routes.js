import React, { Component } from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import AppContainer from './app/app-container'

import RoomsContainer from './rooms/rooms-container'
import RoomContainer from './rooms/room-container'

import RulesContainer from './rules/rules-container'
import RuleContainer from './rules/rule-container'

import ModuleContainer from './modules/module-container'

import SettingsContainer from './settings/settings-container'

class Routes extends Component {
  render() {
    let { history } = this.props

    return (
      <Router history={history}>
        <Route path="/" component={AppContainer}>
          <IndexRoute component={RoomsContainer} />
          <Route path="rooms/:id" component={RoomContainer} />

          <Route path="modules/:id" component={ModuleContainer} />

          <Route path="rules" component={RulesContainer} />
          <Route path="rules/:id" component={RuleContainer} />

          <Route path="settings" component={SettingsContainer} />
        </Route>
      </Router>
    )
  }
}


export default Routes
