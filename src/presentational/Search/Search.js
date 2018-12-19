import React from 'react'

import './search.css'

export default props => {
  const label = 'search'
  return (
    <form className="search">
      <label className="screen-reader" htmlFor="">
        {label}
      </label>
      <input className="search__input" type="text" placeholder={label} />
    </form>
  )
}
