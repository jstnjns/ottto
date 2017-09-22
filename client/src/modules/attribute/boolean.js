import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'


class BooleanAttribute extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: props.value
    }
  }

  render() {
    let { attribute } = this.props

    return (
      <div>
        <input type="checkbox" name={attribute.name}
          checked={this.state.value}
          onChange={this.onChange.bind(this)} />
      </div>
    )
  }

  onChange(event) {
    let value = event.target.checked

    this.setState({ value })
    this.props.onChange(value)
  }
}


export default BooleanAttribute
