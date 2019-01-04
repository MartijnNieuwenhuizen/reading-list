import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Router from './Router'
import initializeStore from './redux/store/initializeStore'

import './index.css'

const store = initializeStore

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
)
