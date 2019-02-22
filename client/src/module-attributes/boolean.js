import React, { Component } from 'react'

import FormGroup from '@material-ui/core/FormGroup'
import FormLabel from '@material-ui/core/FormLabel'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'


class BooleanAttribute extends Component {
  render() {
    let { attribute, value } = this.props

    return (
      <FormGroup>
        <FormLabel>{attribute.label}</FormLabel>
        <FormControlLabel
          control={
            <Switch
              checked={value}
              onChange={this.onChange.bind(this)} />
          }
          label={attribute.options[1].label}
        />
      </FormGroup>
    )
  }

  onChange(event, checked) {
    this.props.onChange(checked)
  }
}


export default BooleanAttribute
