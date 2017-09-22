import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'


class NumberAttribute extends Component {
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
        <Form.Input type="range" name={attribute.name}
          value={this.state.value}
          min={attribute.min}
          max={attribute.max}
          onChange={this.onChange.bind(this)} />
        {this.state.value}
      </div>
    )
  }

  onChange(event) {
    let value = event.target.value

    this.setState({ value })
    this.props.onChange(value)
  }
}


export default NumberAttribute
