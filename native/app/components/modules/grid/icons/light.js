import React, { Component } from 'react'

import {
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native'


class Light extends Component {
  render() {
    return (
      <TouchableHighlight
        key={module.id}
        onPress={this.props.onPress.bind(this, module)}
        underlayColor='#FFFFFF'
        style={styles.icon}>
        <View></View>
      </TouchableHighlight>
    )
  }
}


const iconDimension = 60;
const styles = {
  icon: {
    width: iconDimension,
    height: iconDimension,
    backgroundColor: '#007AFF',
    borderRadius: 14,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 10,
    shadowOpacity: 0.03,
    shadowColor: '#000000',
  },
}


export default Light
