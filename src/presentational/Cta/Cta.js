import React from 'react'

import './cta.css'

export default props => (
  <a className="cta" href={props.href}>
    {props.label}
  </a>
)
