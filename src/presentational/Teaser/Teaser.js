import React from 'react'
import Tags from '../Tags/Tags'
import Cta from '../Cta/Cta'
import ReadingTime from '../ReadingTime/ReadingTime'
import Author from '../Author/Author'

import './teaser.css'

export default props => (
  <div className="teaser">
    <div className="teaser__top">
      <p className="teaser__title h1">
        <Cta label={props.title} href={props.href} />
      </p>
      <div className="teaser__reading-time">
        <ReadingTime dur={props.readingTimeInMinutes} />
      </div>
      <address className="teaser__meta">
        <div className="teaser__author">
          <Author name={props.authorName} />
        </div>
      </address>
    </div>

    <div className="teaser__tags">
      <Tags tags={props.tags} />
    </div>
  </div>
)
