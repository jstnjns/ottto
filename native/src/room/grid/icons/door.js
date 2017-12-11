import React, { Component } from 'react'
import { Svg, G, Path, Rect } from 'react-native-svg'


const DoorOpenIcon = (props) => {
  return (
    <Svg width="60" height="60">
      <Path d="M20,14.642832 L31,11.0515098 C31.5522847,10.8711978 32,11.1793958 32,11.7398894 L32,47.2601106 C32,47.8206042 31.5522847,48.1288022 31,47.9484902 L20,44.357168 C19.4477153,44.176856 19,43.6790297 19,43.2452418 L19,15.7547582 C19,15.3209703 19.4477153,14.823144 20,14.642832 Z" id="door" fill="#EE5B5E" />
      <Path d="M34,13 L38.9487179,13 C40.0816097,13 41,13.8954305 41,15 L41,42 C41,43.1045695 40.0816097,44 38.9487179,44 L34,44 L34,42 L39,42 L39,15 L34,15 L34,13 Z" id="doorway" fill="#EEEEEE" fill-rule="nonzero" />
    </Svg>
  )
}

const DoorClosedIcon = (props) => {
  return (
    <Svg width="60" height="60">
      <Rect id="door" x="19" y="13" width="22" height="31" rx="2" fill="#DDDDDD"></Rect>
    </Svg>
  )
}


class DoorIcon extends Component {
  render() {
    const { module, style } = this.props

    const Icon = module.values.status
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
