import React, { Component } from 'react'

import {
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
} from 'react-native'
import Light from './icons/light'


class ModulesGridIcon extends Component {
  render() {
    let module = this.props.module;

    if(module.icon) {
      return (
        <View style={styles.gridItem}>
          <TouchableHighlight
            key={module.id}
            onPress={this.props.onPress.bind(this, module)}
            underlayColor='#FFFFFF'
            style={styles.gridItemIcon}>
            <View />
          </TouchableHighlight>
          <Text style={styles.gridItemText}
            numberOfLines={1}
            adjustsFontSizeToFit={true}>
            {module.name}
          </Text>
        </View>
      )
    } else {
      return (
        <View style={styles.gridItem}>
          <TouchableHighlight
            key={module.id}
            onLongPress={console.log('show "add module" menu')}
            underlayColor='#FFFFFF'
            style={styles.gridItemBlank}>
            <View />
          </TouchableHighlight>
          <Text style={styles.gridItemText}>{module.name}</Text>
        </View>
      )
    }
  }
}


const iconDimension = 60;
const styles = StyleSheet.create({
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
  gridItemText: {
    marginTop: 5,
    width: iconDimension,
    height: 14,
    overflow: 'hidden',
    fontSize: 11,
    color: '#999999',
    textAlign: 'center'
  },
  gridItemBlank: {
    width: iconDimension,
    height: iconDimension,
    backgroundColor: '#EFEFEF',
    borderRadius: 14
  },
})


export default ModulesGridIcon
