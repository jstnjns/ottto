import React, { Component } from 'react'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

import Routes from './routes'
import reducers from './reducers'


const logger = createLogger()
const middleware = applyMiddleware(thunk, logger)

const store = createStore(reducers, middleware)


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    )
  }
}
