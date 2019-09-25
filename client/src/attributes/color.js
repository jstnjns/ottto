import React, { Fragment } from 'react'
// import ct from 'color-temperature'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'


const handleChange = (onChange) => (event) => {
  onChange(event.target.value)
}

export default (props) => {
  const { attribute, onChange } = props
  const value = attribute.value.value || attribute.default

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography gutterBottom>
          {attribute.name}
          <br />
          {value}
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <input
          type="color"
          name={attribute.key}
          value={value}
          onChange={handleChange(onChange)}
        />
      </Grid>
    </Grid>
  )
}

// state = {
//   temperature: 6500,
//   tab: 'color',
// }
//
// toggleTab = (tab) => () => this.setState({ tab })

// renderColor() {
//   let { attribute, value } = this.props
//
//   return (
//     <FormControl>
//       <InputLabel htmlFor="color">
//         Color
//       </InputLabel>
//
//       <input id="color"
//         type="color"
//         label={attribute.name}
//         value={value}
//         onChange={this.onChange} />
//
//       <br />
//
//       <Button onClick={this.toggleTab('temperature')}>
//         Temperature
//       </Button>
//     </FormControl>
//   )
// }

// renderTemperature() {
//   let { attribute } = this.props
//   let { temperature } = this.state
//
//   return (
//     <FormControl>
//       <InputLabel htmlFor="temperature">
//         Temperature
//       </InputLabel>
//
//       <input
//         id="temperature"
//         type="range"
//         label={attribute.label}
//         value={temperature}
//         min={4500}
//         max={8500}
//         onChange={this.onTemperatureChange}
//       />
//
//       <br/>
//
//       <Button onClick={this.toggleTab('color')}>
//         Color
//       </Button>
//     </FormControl>
//   )
// }

// onTemperatureChange = (event) => {
//   let temperature = event.target.value
//   let rgb = ct.colorTemperature2rgb(temperature)
//   let value = this.rgbToHex(rgb)
//
//   this.setState({ temperature })
//   this.props.onChange(value)
// }
//
// rgbToHex(rgb){
//   let bin = (rgb.red << 16) | (rgb.green << 8) | rgb.blue
//
//   return ((h) => {
//     return '#' + (new Array(7-h.length).join('0')+h)
//   })(bin.toString(16).toUpperCase())
// }
