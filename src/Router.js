import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home/Home'
import AddResource from './pages/AddResource/AddResource'
import TableView from './pages/TableView/TableView'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={'/'} component={Home} />
      <Route exact path={'/add-resource'} component={AddResource} />
      <Route exact path={'/table-view'} component={TableView} />

      <Route component={() => <h1>404 not found</h1>} />
    </Switch>
  </BrowserRouter>
)
