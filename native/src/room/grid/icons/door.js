import React, { Component } from 'react'
import { View, Icon, TouchableHighlight, StyleSheet } from 'react-native'
import { Svg, G, Path, Rect } from 'react-native-svg'


const DoorOpenIcon = (props) => {
  return (
    <Svg width="60" height="60">
      <Path d="M20,15.642832 L31,12.0515098 C31.5522847,11.8711978 32,12.1793958 32,12.7398894 L32,48.2601106 C32,48.8206042 31.5522847,49.1288022 31,48.9484902 L20,45.357168 C19.4477153,45.176856 19,44.6790297 19,44.2452418 L19,16.7547582 C19,16.3209703 19.4477153,15.823144 20,15.642832 Z M29,25 C28.4477153,25 28,25.4477153 28,26 L28,34 C28,34.5522847 28.4477153,35 29,35 C29.5522847,35 30,34.5522847 30,34 L30,26 C30,25.4477153 29.5522847,25 29,25 Z" id="door" fill="#EE5B5E"></Path>
      <Path d="M34,15 L38.9487179,15 C40.0816097,15 41,15.8954305 41,17 L41,44 C41,45.1045695 40.0816097,46 38.9487179,46 L34,46 L34,44 L39,44 L39,17 L34,17 L34,15 Z" id="doorway" fill="#F1F1F1" fill-rule="nonzero"></Path>
    </Svg>
  )
}


const DoorClosedIcon = (props) => {
  return (
    <Svg width="60" height="60">
      <Path d="M21,15 L39,15 C40.1045695,15 41,15.8954305 41,17 L41,44 C41,45.1045695 40.1045695,46 39,46 L21,46 C19.8954305,46 19,45.1045695 19,44 L19,17 L19,17 C19,15.8954305 19.8954305,15 21,15 L21,15 Z M37,25 C36.4477153,25 36,25.4477153 36,26 L36,34 C36,34.5522847 36.4477153,35 37,35 C37.5522847,35 38,34.5522847 38,34 L38,26 C38,25.4477153 37.5522847,25 37,25 Z" id="Combined-Shape" fill="#DDDDDD"></Path>
    </Svg>
  )
}


class DoorIcon extends Component {
  render() {
    const { module, style } = this.props

    const Icon = module.values.contact
      ? DoorOpenIcon
      : DoorClosedIcon

    return (
      <TouchableHighlight key={module.id}
        style={[style, styles.container]}
        underlayColor='#FFF'
        onPress={this.props.onPress.bind(this, module)}>
        <View>
          <Icon />
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
    backgroundColor: '#FFF'
  },
})


export default DoorIcon
