import React from 'react'
import Icon from '../Icon/Icon'

import './reading-time.css'

export default props => {
  const readingTime = `/reading-time?dur=${props.dur}`

  return (
    <div className="reading-time">
      <div className="reading-time__icon">
        <Icon type="clock" />
      </div>
      <a className="reading-time__link" href={readingTime}>
        {props.dur}
      </a>
    </div>
  )
}
