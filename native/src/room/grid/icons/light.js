import React, { Component } from 'react'
import { StyleSheet, TouchableHighlight, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'


class Light extends Component {
  render() {
    const { module, style } = this.props

    const iconName = module.values.power ? 'ios-bulb' : 'ios-bulb-outline'
    const color = module.values.power ? module.values.color : '#CCCCCC'

    return (
      <TouchableHighlight key={module.id}
        style={[style, styles.container, { backgroundColor: color }]}
        underlayColor='#FFFFFF'
        onPress={this.props.onPress.bind(this, module)}>
        <View style={styles.circle}>
          <Icon style={styles.icon}
            name={iconName} size={28} color={color} />
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
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
  },
  icon: {
    marginTop: 5,
  },
})


export default Light
