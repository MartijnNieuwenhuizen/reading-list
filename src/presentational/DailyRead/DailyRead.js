import React from 'react'
import Teaser from '../Teaser/Teaser'

import './daily-read.css'

const fakeTeaser = {
  title: 'One to rule them all',
  href: '/',
  readingTimeInMinutes: '15',
  authorName: 'Boromir',
  tags: [
    {
      label: 'smaug',
      href: '/smaug',
    },
    {
      label: 'frodo',
      href: '/frodo',
    },
  ],
}

export default props => (
  <div className="daily-read">
    <h1 className="daily-read__title">Your Daily Read</h1>

    <div className="daily-read__promo">
      <Teaser {...fakeTeaser} />
    </div>
  </div>
)
