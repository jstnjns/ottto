import React, { PureComponent } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import AppContainer from './app/app-container'
import RoomsContainer from './rooms/rooms-container'
import RoomContainer from './rooms/room-container'
import RulesContainer from './rules/rules-container'
import RuleContainer from './rules/rule-container'
import ModuleContainer from './modules/module-container'
import SettingsContainer from './settings/settings-container'


export default class Routes extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <AppContainer>
          <Switch>
            <Route path="/" exact component={RoomsContainer} />
            <Route path="/rooms/:_id" component={RoomContainer} />

            <Route path="/modules/:_id" component={ModuleContainer} />

            <Route path="/rules" component={RulesContainer} />
            <Route path="/rules/:_id" component={RuleContainer} />

            <Route path="/settings" component={SettingsContainer} />
          </Switch>
        </AppContainer>
      </BrowserRouter>
    )
  }
}
