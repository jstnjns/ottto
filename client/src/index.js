import React from 'react'
import ReactDOM from 'react-dom'

import { createStore } from 'redux'

import App from './app/app'
import AppReducers from './app/app-actions'


const store = createStore(AppReducers)


ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
)
