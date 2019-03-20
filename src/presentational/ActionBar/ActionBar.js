import React from 'react'
import Icon from '../Icon/Icon'
import { Link } from 'react-router-dom'

import './action-bar.css'

export default () => {
  const menuItems = [
    {
      href: '/',
      screenreaderLabel: 'Go to home',
      iconType: 'home',
    },
    {
      href: '/add-article',
      screenreaderLabel: 'add an article',
      iconType: 'add',
    },
    {
      href: '/search',
      screenreaderLabel: 'search',
      iconType: 'search',
    },
  ]

  return (
    <nav className="action-bar">
      <ol className="action-bar__list">
        {menuItems.map(menuItem => (
          <li className="action-bar__item" key={menuItem.iconType}>
            <Link className="action-bar__link" to={menuItem.href}>
              <span className="screen-reader">
                {menuItem.screenreaderLabel}
              </span>
              <Icon type={menuItem.iconType} />
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  )
}
