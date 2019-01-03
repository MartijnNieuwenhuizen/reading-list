import React from 'react'
import Icon from '../Icon/Icon'

import './action-bar.css'

export default () => {
  const menuItems = [
    {
      href: '/add-resource',
      screenreaderLabel: 'add an article',
      iconType: 'add'
    },
    {
      href: '/',
      screenreaderLabel: 'search',
      iconType: 'search'
    }
  ]

  return (
    <nav className="action-bar">
      <ol className="action-bar__list">
        {menuItems.map(menuItem => (
          <li className="action-bar__item" key={menuItem.href}>
            <a className="action-bar__link" href={menuItem.href}>
              <span className="screen-reader">{menuItem.screenreaderLabel}</span>
              <Icon type={menuItem.iconType} />
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
