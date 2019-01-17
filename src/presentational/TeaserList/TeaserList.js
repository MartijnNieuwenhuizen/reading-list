import React from 'react'
import Teaser from '../Teaser/Teaser'

import './teaser-list.css'

export default props => {
  return (
    <div className="teaser-list">
      {props.items.map(item => (
        <div className="teaser-item" key={item.title}>
          <Teaser
            href={item.href}
            tags={item.tags}
            title={item.title}
            ctaLabel={item.ctaLabel}
            authorName={item.authorName}
            readingTimeInMinutes={item.readingTimeInMinutes}
          />
        </div>
      ))}
    </div>
  )
}
