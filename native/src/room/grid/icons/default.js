import React from 'react'
import { View, TouchableHighlight } from 'react-native'

export default (props) => {
  return (
    <TouchableHighlight
      onPress={props.onPress.bind(this, module)}
      underlayColor='#FFFFFF'
      style={props.style}>
      <View />
    </TouchableHighlight>
  )
}
