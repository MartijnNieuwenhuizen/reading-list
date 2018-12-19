import React, { Component } from 'react'

import './popover.css'

class Popover extends Component {
  state = {
    opened: false
  }

  componentDidMount() {}

  _open() {}
  _close() {}

  render(props) {
    console.log('this.props: ', this.props)
    return (
      <div className="popover">
        <div className="popover__controls">
          <button className="popover__hide">+</button>
        </div>
        <div className="popover__inner">{this.props.children}</div>
      </div>
    )
  }
}

export default Popover
