import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { StyleSheet, TouchableHighlight, View, Text } from 'react-native'
import LightIcon from './icons/light'


class ModulesGridIcon extends Component {
  render() {
    let { module } = this.props;

    if(module) {
      return (
        <View style={styles.gridItem}>
          {this.renderIcon.bind(this)(module)}
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
            underlayColor='#FFFFFF'
            style={styles.gridItemBlank}>
            <View />
          </TouchableHighlight>
          <Text style={styles.gridItemText}
            numberOfLines={1}
            adjustsFontSizeToFit={true}>
          </Text>
        </View>
      )
    }
  }

  renderIcon(module) {
    if(module.type.name == 'Light') {
      return (
        <LightIcon module={module}
          style={styles.gridItemIcon}
          onPress={this.props.onPress.bind(this, module)} />
      )
    } else {
      return (
        <TouchableHighlight
          onPress={this.props.onPress.bind(this, module)}
          underlayColor='#FFFFFF'
          style={styles.gridItemIcon}>
          <View />
        </TouchableHighlight>
      )
    }
  }
}


const iconDimension = 60;
const styles = StyleSheet.create({
  gridItem: {
    marginBottom: 7,
    marginLeft: 11,
    marginRight: 11,
    alignItems: 'center',
  },
  gridItemIcon: {
    width: iconDimension,
    height: iconDimension,
    backgroundColor: 'white',
    borderRadius: 14,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 10,
    shadowOpacity: 0.03,
    shadowColor: '#000000',
  },
  gridItemText: {
    marginTop: 2,
    width: iconDimension,
    height: 13,
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


export default connect(
  (state, props) => ({
    module: props.module ? state.modules.entities[props.module.id] : null
  })
)(ModulesGridIcon)
