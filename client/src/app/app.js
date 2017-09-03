import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'

import RoomsContainer from '../rooms/rooms-container'
import SettingsContainer from '../settings/settings-container'


export default ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <div>
        <Route exact path="/" component={RoomsContainer} />
        <Route path="/settings" component={SettingsContainer} />
      </div>
    </Router>
  </Provider>
)
