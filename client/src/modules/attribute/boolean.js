import React, { Component } from 'react'
import { Radio } from 'semantic-ui-react'


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
      <Radio toggle type="checkbox" size="large"
        checked={this.state.value}
        onChange={this.onChange.bind(this)} />
    )
  }

  onChange(event, data) {
    let value = data.checked

    this.setState({ value })
    this.props.onChange(value)
  }
}


export default BooleanAttribute
