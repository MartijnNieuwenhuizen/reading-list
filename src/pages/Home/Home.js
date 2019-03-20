import React, { Component } from 'react'
import App from '../../App'
import AllArticlesTeaserList from '../../container/AllArticlesTeaserList/AllArticlesTeaserList'
import Filter from '../../presentational/Filter/Filter'
import Search from '../../presentational/Search/Search'
import Popover from '../../presentational/Popover/Popover'
import DailyRead from '../../presentational/DailyRead/DailyRead'
import './home.css'

class Home extends Component {
  render() {
    return (
      <App>
        <div className="app__top">
          <Search />
          <div className="app__top-pull-down">
            <Filter />
          </div>
        </div>

        {/* Daily Read  */}
        <div className="page-item">
          <DailyRead />
        </div>

        <AllArticlesTeaserList />

        <Popover>
          <h1>In the popover right now!!</h1>
        </Popover>
      </App>
    )
  }
}

export default Home
