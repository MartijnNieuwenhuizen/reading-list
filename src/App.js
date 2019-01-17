import React, { Component } from 'react'

import './basic-styles/colors.css'
import './basic-styles/typography.css'
import './basic-styles/base.css'
import './app.css'

import ActionBar from './presentational/ActionBar/ActionBar'

// @TODO: Create a popover, use react routing for this and render the correct component inside a generic popover

class App extends Component {
  render() {
    return (
      <main className="app">
        <ActionBar />
        <div>{this.props.children}</div>
      </main>
    )
  }
}

export default App
