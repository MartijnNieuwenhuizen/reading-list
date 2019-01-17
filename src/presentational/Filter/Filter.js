import React from 'react'
import Foo from '../Foo/Foo'

import './filter.css'

export default props => {
  const items = [{ count: 1 }, { count: 2 }, { count: 3 }]
  return (
    <div className="filter">
      <ol className="filter__list">
        {items.map(item => (
          <li className="filter__item" key={item.count}>
            <Foo />
          </li>
        ))}
      </ol>
    </div>
  )
}
