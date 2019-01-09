import React, { Component } from 'react'
import App from '../../App'
import AllArticlesTable from '../../container/AllArticlesTable/AllArticlesTable'
import './table-view.css'

class TableView extends Component {
  render() {
    return (
      <App>
        <AllArticlesTable />
      </App>
    )
  }
}

export default TableView
