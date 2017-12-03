import React, { Component } from 'react'
import { StyleSheet, TouchableHighlight, View } from 'react-native'
// import Icon from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


class LightIcon extends Component {
  render() {
    const { module, style } = this.props

    // const iconName = module.values.power ? 'ios-bulb' : 'ios-bulb-outline'
    const iconName = module.values.power ? 'lightbulb-on' : 'lightbulb-outline'
    const color = module.values.power ? module.values.color : '#CCC'

    return (
      <TouchableHighlight key={module.id}
        style={[style, styles.container]}
        underlayColor='#FFF'
        onPress={this.props.onPress.bind(this, module)}>
        <View style={[styles.circle, { backgroundColor: color }]}>
          <Icon style={styles.icon}
            name={iconName} size={32} color="#FFF" />
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
    width: 52,
    height: 52,
    borderRadius: 26,
  },
  icon: {
    marginTop: 5,
  },
})


export default LightIcon
