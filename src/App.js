import React, { Component } from 'react'
import './basic-styles/colors.css'
import './basic-styles/typography.css'
import './basic-styles/base.css'
import './app.css'

import TeaserList from './presentational/TeaserList/TeaserList'
import Filter from './presentational/Filter/Filter'
import Search from './presentational/Search/Search'
import ActionBar from './presentational/ActionBar/ActionBar'
import Popover from './presentational/Popover/Popover'

// @TODO: Create a popover, use react routing for this and render the correct component inside a generic popover

class App extends Component {
  render() {
    return (
      <main className="app">
        <ActionBar />
        <div>
          <div className="app__top">
            <Search />
            <div className="app__top-pull-down">
              <Filter />
            </div>
          </div>

          <TeaserList />
          <Popover>
            <h1>In the popover right now!!</h1>
          </Popover>
        </div>
      </main>
    )
  }
}

export default App
