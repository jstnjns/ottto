import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { browserHistory } from 'react-router'

import reducers from './app/app-actions'

import Routes from './routes'


const logger = createLogger()
const middleware = applyMiddleware(thunk, logger)
const store = createStore(reducers, middleware)


ReactDOM.render(
  <Provider store={store}>
    <Routes history={browserHistory} />
  </Provider>,
  document.getElementById('root')
)
