import React, { Fragment } from 'react'

import './home.css'

import TeaserList from '../../presentational/TeaserList/TeaserList'
import Filter from '../../presentational/Filter/Filter'
import Search from '../../presentational/Search/Search'
import Popover from '../../presentational/Popover/Popover'

export default () => (
  <Fragment>
    <div className="app__top">
      <Search />
      <div className="app__top-pull-down">
        <Filter />
      </div>
    </div>

    <TeaserList />
    <Popover>
      <h1>In the popover right now!!</h1>
    </Popover>
  </Fragment>
)
