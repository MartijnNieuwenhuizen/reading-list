import React from 'react'
import ReactDOM from 'react-dom'
import Router from './Router'

import ContextProvider from './context/ContextProvider'

import './index.css'

ReactDOM.render(
  <ContextProvider>
    <Router />
  </ContextProvider>,

  document.getElementById('root')
)
