import React, { Component } from 'react'

class Form extends Component {
  render() {
    console.log('this.props: ', this.props)
    const { method, onSubmit } = this.props

    return (
      <form method={method} onSubmit={onSubmit}>
        {this.props.children}
      </form>
    )
  }
}

export default Form
