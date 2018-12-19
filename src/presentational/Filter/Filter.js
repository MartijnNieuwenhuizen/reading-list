import React from 'react'
import Foo from '../Foo/Foo'

import './filter.css'

export default props => {
  const items = [{}, {}, {}]
  return (
    <div className="filter">
      <ol className="filter__list">
        {items.map(item => (
          <li className="filter__item">
            <Foo />
          </li>
        ))}
      </ol>
    </div>
  )
}
