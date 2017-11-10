import React, { Component } from 'react'

import {
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native'


class Light extends Component {
  render() {
    const { module, style } = this.props

    return (
      <TouchableHighlight key={module.id}
        style={[style, { backgroundColor: module.values.color }]}
        underlayColor='#FFFFFF'
        onPress={this.props.onPress.bind(this, module)}>
        <View />
      </TouchableHighlight>
    )
  }
}


export default Light
