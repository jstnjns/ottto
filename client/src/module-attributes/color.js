import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Input, { InputLabel } from '@material-ui/core/Input'
import FormControl from '@material-ui/core/FormControl'

import ct from 'color-temperature'


class ColorAttribute extends Component {
  constructor(props) {
    super(props)

    this.state = {
      temperature: 6500,
      tab: 'color',
    }
  }

  render() {
    let { tab } = this.state

    if (tab === 'temperature') {
      return this.renderTemperature()
    } else {
      return this.renderColor()
    }
  }

  renderColor() {
    let { attribute, value } = this.props

    return (
      <FormControl>
        <InputLabel htmlFor="color">
          Color
        </InputLabel>

        <Input id="color"
          type="color"
          label={attribute.label}
          value={value}
          onChange={this.onChange.bind(this)} />

        <br />

        <Button raised
          onClick={() => this.setState({ tab: 'temperature' })}>
          Temperature
        </Button>
      </FormControl>
    )
  }

  renderTemperature() {
    let { attribute } = this.props
    let { temperature } = this.state

    return (
      <FormControl>
        <InputLabel htmlFor="temperature">
          Temperature
        </InputLabel>

        <Input id="temperature"
          type="range"
          label={attribute.label}
          value={temperature}
          min="4500"
          max="8500"
          onChange={this.onTemperatureChange.bind(this)} />

        <br/>

        <Button raised
          onClick={() => this.setState({ tab: 'color' })}>
          Color
        </Button>
      </FormControl>
    )
  }

  onTemperatureChange(event) {
    let temperature = event.target.value
    let rgb = ct.colorTemperature2rgb(temperature)
    let value = this.rgbToHex(rgb)

    this.setState({ temperature })
    this.props.onChange(value)
  }

  rgbToHex(rgb){
    let bin = (rgb.red << 16) | (rgb.green << 8) | rgb.blue

    return ((h) => {
      return '#' + (new Array(7-h.length).join('0')+h)
    })(bin.toString(16).toUpperCase())
  }

  onChange(event) {
    this.props.onChange(event.target.value)
  }
}


export default ColorAttribute
