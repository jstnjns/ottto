import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import reducers from './app/app-actions'

import App from './app/app'
import Rooms from './rooms/rooms'
import Room from './rooms/room'
import Module from './modules/module'
import Settings from './settings/settings'


const logger = createLogger()
const middleware = applyMiddleware(logger, thunk)
const store = createStore(reducers, middleware)


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Rooms} />
        <Route path="rooms/:id" component={Room} />

        <Route path="modules/:id" component={Module} />

        <Route path="settings" component={Settings} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
