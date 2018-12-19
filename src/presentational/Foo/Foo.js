import React from 'react'
import Icon from '../Icon/Icon'

import './foo.css'

export default props => (
  <div className="foo">
    <p className="foo__label">Name of foo</p>
    <span className="foo__remove">
      <Icon type="add" />
    </span>
  </div>
)
