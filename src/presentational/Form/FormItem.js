import React, { PureComponent } from 'react'

import './form-item.css'

class FormItem extends PureComponent {
  render() {
    return (
      <div>
        <label htmlFor={this.props.id}>{this.props.label}</label>

        <input
          type={this.props.type}
          id={this.props.id}
          placeholder={this.props.placeholder}
          ref={this.props.refProp}
          onFocus={this.props.onFocus}
          onBlur={this.props.onBlur}
        />
      </div>
    )
  }
}

export default FormItem
