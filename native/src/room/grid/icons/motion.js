import React, { Component } from 'react'
import { StyleSheet, TouchableHighlight, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


class MotionIcon extends Component {
  render() {
    const { module, style } = this.props

    const iconName = module.values.motion ? 'waves' : 'sleep'
    const color = module.values.motion ? '#157EFB' : '#CCC'

    return (
      <TouchableHighlight key={module.id}
        style={[style, styles.container, { backgroundColor: color }]}
        underlayColor='#FFF'
        onPress={this.props.onPress.bind(this, module)}>
        <Icon style={styles.icon}
          name={iconName} size={28} color="#FFF" />
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
  icon: {
    marginTop: 5,
  },
})


export default MotionIcon
