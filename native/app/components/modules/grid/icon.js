import React, { Component } from 'react'

import {
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native'


class ModulesGridIcon extends Component {
  render() {
    let module = this.props.module;

    if(module.icon) {
      return (
        <TouchableHighlight
          key={module.id}
          onPress={this.props.onPress.bind(this, module)}
          underlayColor='#FFFFFF'
          style={styles.gridItemIcon}>
          <View></View>
        </TouchableHighlight>
      )
    } else {
      return (
        <TouchableHighlight
          key={module.id}
          onLongPress={console.log('show "add module" menu')}
          underlayColor='#FFFFFF'
          style={styles.gridItemBlank}>
          <View></View>
        </TouchableHighlight>
      )
    }
  }
}


const iconDimension = 60;
const styles = {
  gridItem: {
    margin: 5,
    alignItems: 'center',
  },
  gridItemIcon: {
    width: iconDimension,
    height: iconDimension,
    backgroundColor: '#007AFF',
    borderRadius: 14,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 10,
    shadowOpacity: 0.03,
    shadowColor: '#000000',
  },
  gridItemBlank: {
    width: iconDimension,
    height: iconDimension,
    backgroundColor: '#EFEFEF',
    borderRadius: 14
  },
}


export default ModulesGridIcon
