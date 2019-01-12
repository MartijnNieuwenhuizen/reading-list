import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

class AllElementsForm extends Component {
  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(event) {
    // Handle submit
  }

  validate() {
    // Handle validation
  }

  render() {
    return (
      <Formik
        onSubmit={this.onSubmit}
        initialValues={this.state.AllArticles}
        validate={this.validate}
      >
        <Form>
          <FormInput type="text" name="text" onChange={this.onChange} onBlur={} value={} />
        </Form>
      </Formik>
    )
  }
}

export default AllElementsForm
