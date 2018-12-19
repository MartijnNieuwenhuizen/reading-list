import React from 'react'
import Icon from '../Icon/Icon'

import './author.css'

export default props => {
  const contactLink = `/author?name=${props.name}`

  return (
    <div className="author">
      <div className="author__icon">
        <Icon type="person" />
      </div>
      <a className="author__link" href={contactLink}>
        {props.name}
      </a>
    </div>
  )
}
