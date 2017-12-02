import React, { Component } from 'react'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'

import ct from 'color-temperature'


class ColorAttribute extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: props.value,
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
    let { attribute } = this.props
    let { value } = this.state

    return (
      <div>
        <TextField
          label={attribute.label}
          value={value}
          onChange={this.onChange.bind(this)} />

        <Button raised
          onClick={() => this.setState({ tab: 'temperature' })}>
          Temperature
        </Button>
      </div>
    )
  }

  renderTemperature() {
    let { attribute } = this.props
    let { temperature } = this.state

    return (
      <div>
        <TextField type="range"
          label={attribute.label}
          value={temperature}
          min="4500"
          max="8500"
          onChange={this.onTemperatureChange.bind(this)} />

        <Button raised
          onClick={() => this.setState({ tab: 'color' })}>
          Color
        </Button>
      </div>
    )
  }

  onTemperatureChange(event) {
    let temperature = event.target.value
    let rgb = ct.colorTemperature2rgb(temperature)
    let value = this.rgbToHex(rgb)

    this.setState({ temperature, value })
    this.props.onChange(value)
  }

  rgbToHex(rgb){
    let bin = (rgb.red << 16) | (rgb.green << 8) | rgb.blue

    return ((h) => {
      return '#' + (new Array(7-h.length).join('0')+h)
    })(bin.toString(16).toUpperCase())
  }

  onChange(event) {
    let value = event.target.value

    this.setState({ value })
    this.props.onChange(value)
  }
}


export default ColorAttribute
