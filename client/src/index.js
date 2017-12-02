import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import reducers from './app/app-actions'

import AppContainer from './app/app-container'
import RoomsContainer from './rooms/rooms-container'
import RoomContainer from './rooms/room-container'
import ModuleContainer from './modules/module-container'
import SettingsContainer from './settings/settings-container'


const logger = createLogger()
const middleware = applyMiddleware(thunk, logger)
const store = createStore(reducers, middleware)


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRoute component={RoomsContainer} />
        <Route path="rooms/:id" component={RoomContainer} />

        <Route path="modules/:id" component={ModuleContainer} />

        <Route path="settings" component={SettingsContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
