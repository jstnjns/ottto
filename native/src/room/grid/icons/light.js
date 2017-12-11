import React, { Component } from 'react'
import { StyleSheet, TouchableHighlight, View } from 'react-native'
import { Svg, G, Circle, Path } from 'react-native-svg'


const LightOnIcon = (props) => {
  return (
    <Svg width="60" height="60">
      <Circle id="Oval" fill="#FFFFFF" cx="30" cy="30" r="20" />
      <Path fill={props.color || '#5FE0DF'}
        d="M31,31.0262978 L31,40.5 L29.5,40.5 L29.5,31.5294373 L27.5147186,29.5441559 C27.2304474,29.2598846 27.2304474,28.7989899 27.5147186,28.5147186 L27.5147186,28.5147186 C27.7989899,28.2304474 28.2598846,28.2304474 28.5441559,28.5147186 L30,29.9705627 L31.4558441,28.5147186 C31.7401154,28.2304474 32.2010101,28.2304474 32.4852814,28.5147186 C32.7695526,28.7989899 32.7695526,29.2598846 32.4852814,29.5441559 L32.4852814,29.5441559 L31.0588745,30.9705627 L31.0588745,30.9705627 C31.0396447,30.9897926 31.0200107,31.008372 31,31.026301 Z M32.4862678,45 L34,45 C34.5522847,45 35,44.5522847 35,44 L35,41.5 L25.5,41.5 L25.5,44 C25.5,44.5522847 25.9477153,45 26.5,45 L28.0137322,45 C28.1380933,46.1249876 29.0918616,47 30.25,47 C31.4081384,47 32.3619067,46.1249876 32.4862678,45 Z M30,52 C17.8497355,52 8,42.1502645 8,30 C8,17.8497355 17.8497355,8 30,8 C42.1502645,8 52,17.8497355 52,30 C52,42.1502645 42.1502645,52 30,52 Z M25.5,40.5 L35,40.5 C35,37.8333333 35.6099846,35.8393019 36.8299539,34.5179058 C38.2140422,33.0187459 39,30.9596024 39,28.75 C39,23.9175084 35.0824916,20 30.25,20 C25.4175084,20 21.5,23.9175084 21.5,28.75 C21.5,30.9626773 22.2893759,33.0230006 23.6756895,34.5243322 C24.8918965,35.8414441 25.5,37.8333333 25.5,40.5 Z M31,18.5 L31,15.5 L29.5,15.5 L29.5,18.5 L31,18.5 Z M40.5,29.5 L44,29.5 L44,28 L40.5,28 L40.5,29.5 Z M20.5,28 L17,28 L17,29.5 L20.5,29.5 L20.5,28 Z M21.6405445,22.9754809 L18.6094555,21.2254809 L17.8594555,22.5245191 L20.8905445,24.2745191 L21.6405445,22.9754809 Z M25.7745191,19.8905445 L24.0245191,16.8594555 L22.7254809,17.6094555 L24.4754809,20.6405445 L25.7745191,19.8905445 Z M35.5245191,20.6405445 L37.2745191,17.6094555 L35.9754809,16.8594555 L34.2254809,19.8905445 L35.5245191,20.6405445 Z M39.1094555,24.2745191 L42.1405445,22.5245191 L41.3905445,21.2254809 L38.3594555,22.9754809 L39.1094555,24.2745191 Z M42.147262,34.9093645 L39.0569454,33.2662141 L38.352738,34.5906355 L41.4430546,36.2337859 L42.147262,34.9093645 Z M20.6865716,33 L18,34.7843917 L18.8134284,36 L21.5,34.2156083 L20.6865716,33 Z" />
    </Svg>
  )
}


const LightOffIcon = (props) => {
  return (
    <Svg width="60" height="60">
      <Circle id="Oval" fill="#D8D8D8" cx="30" cy="30" r="20" />
      <Path d="M31,31.0262978 L31,40.5 L29.5,40.5 L29.5,31.5294373 L27.5147186,29.5441559 C27.2304474,29.2598846 27.2304474,28.7989899 27.5147186,28.5147186 L27.5147186,28.5147186 C27.7989899,28.2304474 28.2598846,28.2304474 28.5441559,28.5147186 L30,29.9705627 L31.4558441,28.5147186 C31.7401154,28.2304474 32.2010101,28.2304474 32.4852814,28.5147186 C32.7695526,28.7989899 32.7695526,29.2598846 32.4852814,29.5441559 L32.4852814,29.5441559 L31.0588745,30.9705627 L31.0588745,30.9705627 C31.0396447,30.9897926 31.0200107,31.008372 31,31.026301 Z M32.4862678,45 L34,45 C34.5522847,45 35,44.5522847 35,44 L35,41.5 L25.5,41.5 L25.5,44 C25.5,44.5522847 25.9477153,45 26.5,45 L28.0137322,45 C28.1380933,46.1249876 29.0918616,47 30.25,47 C31.4081384,47 32.3619067,46.1249876 32.4862678,45 Z M30,52 C17.8497355,52 8,42.1502645 8,30 C8,17.8497355 17.8497355,8 30,8 C42.1502645,8 52,17.8497355 52,30 C52,42.1502645 42.1502645,52 30,52 Z M25.5,40.5 L35,40.5 C35,37.8333333 35.6099846,35.8393019 36.8299539,34.5179058 C38.2140422,33.0187459 39,30.9596024 39,28.75 C39,23.9175084 35.0824916,20 30.25,20 C25.4175084,20 21.5,23.9175084 21.5,28.75 C21.5,30.9626773 22.2893759,33.0230006 23.6756895,34.5243322 C24.8918965,35.8414441 25.5,37.8333333 25.5,40.5 Z" id="Combined-Shape" fill="#F9F9F9" />
    </Svg>
  )
}






class LightIcon extends Component {
  render() {
    const { module, style } = this.props

    const Icon = module.values.power
      ? LightOnIcon
      : LightOffIcon
    const color = module.values.power
      ? module.values.color
      : '#CCC'

    return (
      <TouchableHighlight key={module.id}
        style={[style, styles.container]}
        underlayColor='#FFF'
        onPress={this.props.onPress.bind(this, module)}>
        <View>
          <Icon color={color} />
        </View>
      </TouchableHighlight>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})


export default LightIcon
