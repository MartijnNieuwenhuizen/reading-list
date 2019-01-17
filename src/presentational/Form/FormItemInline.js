import React, { PureComponent } from 'react'

import './form-item-inline.css'

class FormItemInline extends PureComponent {
  render() {
    return (
      <input
        className="form-item-inline"
        type={this.props.type}
        id={this.props.id}
        placeholder={this.props.placeholder}
        ref={this.props.refProp}
        onFocus={this.props.onFocus}
        onBlur={this.props.onBlur}
        value={this.props.value ? this.props.value : ''}
      />
    )
  }
}

export default FormItemInline
