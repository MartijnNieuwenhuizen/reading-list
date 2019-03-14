import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home/Home'
import AddArticle from './pages/AddArticle/AddArticle'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={'/'} component={Home} />
      <Route exact path={'/add-article'} component={AddArticle} />

      <Route component={() => <h1>404 not found</h1>} />
    </Switch>
  </BrowserRouter>
)
