import React, { Component } from 'react'
import TextField from 'material-ui/TextField'


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
        <TextField type="number"
          label={attribute.label}
          value={this.state.value}
          min={attribute.min}
          max={attribute.max}
          onChange={this.onChange.bind(this)} />
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
