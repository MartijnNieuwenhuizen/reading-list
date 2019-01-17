import React from 'react'
import './tags.css'

// @TODO: temp don't show the tags due to DB save issues
export default props => (
  <ul className="tags">
    {props.tags.map(tag => (
      <li className="tags__item" key={tag.label}>
        <a className="tags__link" href={tag.href}>
          {tag.label}
        </a>
      </li>
    ))}
  </ul>
)
