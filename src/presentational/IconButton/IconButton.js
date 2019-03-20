import React from 'react'
import './icon-button.css'

export default props => (
  <button className="icon-button" {...props}>
    {props.children}
  </button>
)
