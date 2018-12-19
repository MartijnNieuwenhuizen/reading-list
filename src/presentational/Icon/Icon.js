import React from 'react'
import { ReactComponent as Add } from './icons/add.svg'
import { ReactComponent as Clock } from './icons/clock.svg'
import { ReactComponent as Person } from './icons/person.svg'
import { ReactComponent as Search } from './icons/search.svg'

import './icon.css'

export default props => {
  const iconLookup = {
    add: <Add />,
    clock: <Clock />,
    person: <Person />,
    search: <Search />
  }
  const icon = iconLookup[props.type] ? iconLookup[props.type] : <i>ICON</i>

  return <div className="icon">{icon}</div>
}
