import React from 'react'
import Teaser from '../Teaser/Teaser'

import './teaser-list.css'

export default () => {
  const items = [
    {
      title: 'What is the Future of Front End Web Development?',
      href:
        'https://css-tricks.com/future-front-end-web-development/?utm_campaign=Revue%20newsletter&utm_medium=Newsletter&utm_source=revue',
      ctaLabel: 'Read Article',
      authorName: 'Chris Coyier',
      readingTimeInMinutes: '5',
      tags: [{ href: '/', label: 'Theory' }, { href: '/', label: 'JS' }]
    },
    {
      title: 'A Unified Styling Language',
      href: 'https://medium.com/seek-blog/a-unified-styling-language-d0c208de2660',
      ctaLabel: 'Read Article',
      authorName: 'Mark Dalgleish',
      readingTimeInMinutes: '5',
      tags: [
        { href: '/', label: 'style-guide' },
        { href: '/', label: 'CSS' },
        { href: '/', label: 'JS' },
        { href: '/', label: 'React' }
      ]
    },
    {
      title: 'Node.js Streams: Everything you need to know',
      href:
        'https://medium.freecodecamp.org/node-js-streams-everything-you-need-to-know-c9141306be93',
      ctaLabel: 'Read Article',
      authorName: 'Samer Buna',
      readingTimeInMinutes: '5',
      tags: [
        { href: '/', label: 'Node.js' },
        { href: '/', label: 'JS' },
        { href: '/', label: 'BA' },
        { href: '/', label: 'Streams' }
      ]
    },
    {
      title: '3 CSS Grid Features That Make My Heart Flutter',
      href: 'https://una.im/css-grid/#%F0%9F%92%81',
      ctaLabel: 'Read Article',
      authorName: 'Una Kravits',
      readingTimeInMinutes: '5',
      tags: [{ href: '/', label: 'CSS' }, { href: '/', label: 'CSS3' }]
    },
    {
      title: 'The power of css',
      href: 'https://codepen.io/una/pen/Wjvdqm',
      ctaLabel: 'Read Article',
      authorName: 'Una Kravits',
      readingTimeInMinutes: '5',
      tags: [
        { href: '/', label: 'CSS' },
        { href: '/', label: 'Code Pen' },
        { href: '/', label: 'HSLA' }
      ]
    },
    {
      title: 'Modern font generator',
      href: 'https://www.mixfont.com/',
      ctaLabel: 'Read Article',
      authorName: 'Mixdfont',
      readingTimeInMinutes: '5',
      tags: [{ href: '/', label: 'CSS' }, { href: '/', label: 'Fonts' }]
    },
    {
      title: 'util.promisify',
      href: 'https://nodejs.org/api/util.html#util_util_promisify_original',
      ctaLabel: 'Read Article',
      authorName: 'unknown',
      readingTimeInMinutes: '5',
      tags: [
        { href: '/', label: 'Node.js' },
        { href: '/', label: 'Util' },
        { href: '/', label: 'Promises' },
        { href: '/', label: 'ES6' }
      ]
    },
    {
      title: 'Here’s what you need to know about npm 5',
      href: 'https://blog.pusher.com/what-you-need-know-npm-5/',
      ctaLabel: 'Read Article',
      authorName: 'Pusher',
      readingTimeInMinutes: '5',
      tags: [
        { href: '/', label: 'NPM' },
        { href: '/', label: 'Pipelines' },
        { href: '/', label: 'Node.js' }
      ]
    },
    {
      title: 'Media Queries Based on Element Width with MutationObserver',
      href:
        'https://codeburst.io/media-queries-based-on-element-width-with-mutationobserver-cf2eff172787',
      ctaLabel: 'Read Article',
      authorName: 'Ali Alaa',
      readingTimeInMinutes: '5',
      tags: [
        { href: '/', label: 'CSS' },
        { href: '/', label: 'Media Queries' },
        { href: '/', label: 'Observer' },
        { href: '/', label: 'JS' }
      ]
    },
    {
      title: 'Naming Things In CSS Grid Layout',
      href: 'https://www.smashingmagazine.com/2017/10/naming-things-css-grid-layout/',
      ctaLabel: 'Read Article',
      authorName: 'Rachel Andrew',
      readingTimeInMinutes: '5',
      tags: [{ href: '/', label: 'CSS' }, { href: '/', label: 'CSS grid' }]
    },
    {
      title: 'Stop Designing For Only 85% Of Users: Nailing Accessibility In Design',
      href: 'https://www.smashingmagazine.com/2017/10/nailing-accessibility-design/',
      ctaLabel: 'Read Article',
      authorName: 'Foo Bar',
      readingTimeInMinutes: '5',
      tags: [
        { href: '/', label: 'Accessibility' },
        { href: '/', label: 'Design' },
        { href: '/', label: 'Inclusive' }
      ]
    },
    {
      title: 'What is an Enum',
      href: 'https://www.thoughtco.com/what-is-an-enum-958326',
      ctaLabel: 'Read Article',
      authorName: 'Unknown',
      readingTimeInMinutes: '5',
      tags: [
        { href: '/', label: 'Enum' },
        { href: '/', label: 'JS' },
        { href: '/', label: 'Strict' }
      ]
    }
  ]

  return (
    <div className="teaser-list">
      {items.map(item => (
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
