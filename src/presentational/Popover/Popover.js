import React, { Component } from 'react'

import './popover.css'

class Popover extends Component {
  state = {
    opened: false
  }

  componentDidMount() {}

  _open() {
    this.setState({ opened: true })
  }
  _close() {
    this.setState({ opened: false })
  }

  render() {
    const popoverSrc = (
      <div className="popover">
        <div className="popover__controls">
          <button className="popover__hide">+</button>
        </div>
        <div className="popover__inner">{this.props.children}</div>
      </div>
    )

    return this.state.opened ? popoverSrc : <div />
  }
}

export default Popover
